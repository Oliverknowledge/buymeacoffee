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
const userFormValidation = z.object({
    identificationDocument: z.custom<File[]>().optional(),
    Name: z.string().min(2).max(50),
    About: z.string().min(2).max(50),
    Link: z.string().min(2).max(100),
    // Add more fields as needed

})
const OnboardingForm =  ({progress}: {progress: () => void}) => {
    const [isLoading, setIsLoading] = useState(false);
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
    const onSubmit = async (values: z.infer<typeof userFormValidation>) => {
      setIsLoading(true);
      console.log(values);
      submitted.current = true;
      try { // Handle form submission logic
       
        progress();
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <>
      {!submitted.current ? (
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
      )
      :
      (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full flex items-center ">

  
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
      )}
      </>
    );
  };
  
  export default OnboardingForm;
  