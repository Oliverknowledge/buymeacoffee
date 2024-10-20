"use client"
import React, { useRef, useState } from 'react'
import FileUploader from '@/components/FileUploader'
import CustomFormField, { FormFieldType } from '@/components/CustomFormField'
import { FormControl } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { Button } from './ui/button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { checkboxes } from '../../data/Checkboxes'
import { useRouter } from 'next/navigation'
import { setUser } from '@/actions/user.actions'
const userFormValidation = z.object({
    identificationDocument: z.custom<File[]>().optional(),
    Name: z.string().min(2).max(50),
    About: z.string().min(2).max(50),
    Link: z.string().min(2).max(100),
    // Add more fields as needed

})
const OnboardingForm =  ({progress}: {progress: () => void}) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const submitted = useRef(false)
    // Initialize form with react-hook-form and zod validation
    const form = useForm<z.infer<typeof userFormValidation>>({
      resolver: zodResolver(userFormValidation),
      defaultValues: {
        identificationDocument: [],
        Name: "",
        About: "",
        Link: "",
      },
    });
  
    // Submit handler for the form
    const onSubmit = async () => {
      setIsLoading(true);
      submitted.current = true;
      try { // Handle form submission logic
        progress();
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    const onSubmit1 = async (values: z.infer<typeof userFormValidation>) => {
      setIsLoading(true);
      try{
        progress();
        router.push("/dashboard")
        setUser({
          identificationDocument: values.identificationDocument,
          Name: values.Name,
          About: values.About,
          Link: values.Link
        })
      
      }catch(error: any){
        console.log(error.message)
      }
      finally{
        setIsLoading(false);
      }
    }; 
    return (
      <>
      {!submitted.current ? (
        <div className="h-[55vh] mx-auto w-[60vw] flex flex-col items-center">
        <h1 className="font-[625] text-2xl pr-2">Complete your page</h1>
        <div className="mt-16 h-full w-[700px]">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full flex items-center  ">
          <section className="flex flex-row h-[80%] w-[50%]  ">
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="identificationDocument"
              
              renderSkeleton={(field) => (
                <FormControl>
                    <>
                    <FileUploader files={field.value} onChange={field.onChange} />
                    </>
                </FormControl>
              )}
            />
  
            <div className="flex flex-col translate-x-[5rem] -translate-y-[2rem] h-[20rem] ">
                <CustomFormField
                    fieldType = {FormFieldType.INPUT}
                    control = {form.control}
                    placeholder = "Name"
                    name = "Name"
                    label = "Name" 
                />

                <CustomFormField
                    fieldType = {FormFieldType.TEXTAREA}
                    control = {form.control}
                    placeholder = "Write about your passion and what drives you. Explain how contributions can make a difference in your work and create a connection with your supporters..."
                    name = "About"
                    label = "About" 
                />
                
                <CustomFormField
                    fieldType = {FormFieldType.INPUT}
                    control = {form.control}
                    placeholder = "https://"
                    name = "Link"
                    label = "Website or social link"
                    
                />
            </div>
          </section>
  
          {/* Conditional Button Rendering */}
          {!isLoading ? (
            <Button
              type="submit"
              className="bg-[#FFDD00] font-semibold text-black px-12 py-7 text-lg rounded-full absolute bottom-5 right-16 hover:bg-[#ffcc00]"
            >
              Next 
            </Button>
          ) : (
            <Button
              className="bg-[#FFDD00] font-semibold text-black px-12 py-7 text-lg rounded-full absolute bottom-5 right-16 hover:bg-[#ffd83a]"
              disabled
            >
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-gray-800 rounded-full h-3 w-3 mx-0.5 animate-pulse" />
              ))}
            </Button>
          )}
        </form>
      </Form>
      </div>
      </div>
      )
      :
      (
        <div className="h-[55vh] mx-auto w-[60vw] flex flex-col items-center">
        <h1 className="font-[625] text-2xl pr-2">Lastly, what&apos;s your plan with buy me a coffee?</h1>
        <div className="mt-16 h-full w-[800px]">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit1)} className="w-full h-full flex items-center gap-4 flex-wrap ">
        {checkboxes.map((item) => (
          <React.Fragment key = {item.id}>
            <div className = "w-[15rem] h-[14rem] border border-gray-200 rounded-2xl shadow-md  ">
                <CustomFormField
                    iconAlt= {item.iconAlt}
                    iconSrc = {item.iconSrc}
                    fieldType = {FormFieldType.CHECKBOX}
                    control = {form.control}
                    name = {item.name}
                    label = {item.label}
                    desc = {item.desc}
                    colour = {item.colour}
                />
            </div>
           </React.Fragment>
           ))}
          {/* Conditional Button Rendering */}
          {!isLoading ? (
            <Button
              type="submit"
              className="bg-[#FFDD00] font-semibold text-black px-12 py-7 text-lg rounded-full absolute bottom-5 right-16 hover:bg-[#ffcc00]"
            >
              Next 
            </Button>
          ) : (
            <Button
              className="bg-[#FFDD00] font-semibold text-black px-12 py-7 text-lg rounded-full absolute bottom-5 right-16 hover:bg-[#ffd83a]"
              disabled
            >
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-gray-800 rounded-full h-3 w-3 mx-0.5 animate-pulse" />
              ))}
            </Button>
          )}
        </form>
      </Form> 
      </div>
      </div>
      
      )}
      
    </>
    );
  };
  
  export default OnboardingForm;
  