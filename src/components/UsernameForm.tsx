"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
export function UsernameForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel><h3 className = "mt-[12.75px] absolute  tracking-wide font-semibold ml-4">buymeacoffee.com/</h3></FormLabel>
              <FormControl>
                <Input placeholder="yourname" className = "pl-[9.5rem] bg-gray-200 text-[#222222] tracking-wide  w-[30rem]" {...field} />
               
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className = " bg-[#FFDD00]  font-semibold text-black px-12 py-7 text-lg rounded-full absolute bottom-5 right-16  hover:bg-[#ffcc00]">Sign up</Button>
      </form>
    </Form>
  )
}