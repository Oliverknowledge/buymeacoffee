import Image from "next/image";

import { Control } from "react-hook-form";


import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { set } from "zod";
import { Textarea } from "./ui/textarea";


export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, iconSrc, iconAlt, placeholder }= props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex mt-2">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="bg-[#F0F0F0] hover:bg-white border-0 w-[22.5rem] rounded-lg "
            />
          </FormControl>
        </div>
      );
  
    
    case FormFieldType.TEXTAREA:
      return (
      <div className = "my-2 ">
        <FormControl >
          <Textarea 
          placeholder = {placeholder} 
          {...field}
            className = "bg-[#F0F0F0] hover:bg-white h-[8rem] rounded-xl  leading-[1.5rem] font-semibold" 
          disabled = {props.disabled}
          
          />
        </FormControl>
        </div>
      )
     
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (

    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className= {`flex-1 ${props.fieldType === FormFieldType.TEXTAREA&& "my-4  "}`}>
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="font-semibold">{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;