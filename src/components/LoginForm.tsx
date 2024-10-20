"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {  useState } from "react"
import { motion } from 'framer-motion'
import { fetchUser, createUser } from "@/actions/user.actions"
import { useRouter } from "next/navigation"

// Define two separate schemas
const usernameSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

const userDetailsSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})



export function LoginForm() {
  const router = useRouter();
  const [signUpUsername, setSignUpUsername] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ validation, setValidation ] =  useState(false);
  let username: string;
  
  // Username form
  const usernameForm = useForm<z.infer<typeof usernameSchema>>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  })

  // Second form (email and password)
  const userDetailsForm = useForm<z.infer<typeof userDetailsSchema>>({
    resolver: zodResolver(userDetailsSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
 
  // Submit handler for the username form
  async function onSubmitUsername(values: z.infer<typeof usernameSchema>) {
    try{
    setLoading(true);
    console.log("Username submitted:", values.username);
    username = values.username;
    let valid = Boolean(await fetchUser(username));
    setValidation(valid)
    
    if (valid) {
      setSignUpUsername(false)
    }
    else{
      setSignUpUsername(true)
    }
    setLoading(false);
    
  }
  catch(error: any){
    console.log(error.message)
  }
  };

  // Submit handler for the second form
  const onSubmitUser = async(values: z.infer<typeof userDetailsSchema>) => {
    setLoading(true)
      username = usernameForm.getValues("username")
      await createUser({
        username: username,
        email: values.email,
        password: values.password
      })
      
    setLoading(false)
    router.push("/dashboard") 

  }

  return (
    <>
      
    
        <div
         // Add container variants for the second form
        
        >
          <div className="flex flex-col" >
            <h2 className="font-semibold text-4xl">Login</h2>
          </div>
          <Form {...userDetailsForm}>
            <form onSubmit={userDetailsForm.handleSubmit(onSubmitUser)} className="space-y-4 mt-10">
              <div > {/* Add item variants to animate input fields */}
                <FormField
                  control={userDetailsForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="rounded-xl font-semibold hover:bg-[#e7e7e7] pl-4 focus:bg-white  bg-[#f0f0f0] text-[#222222] tracking-wide w-[25rem] h-[3rem]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={userDetailsForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      {/* Button to toggle password visibility */}
                      <Button type = "button"variant="link" className="absolute translate-x-[20rem] translate-y-1" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>

                      <FormControl>
                        <Input
                          type={`${showPassword ? "text" : "password"}`}
                          placeholder="Password"
                          className={`   
                            ${!showPassword ? "text-2xl tracking-[-0.10em] pb-2 items-center placeholder:text-sm placeholder:tracking-normal placeholder:-translate-y-[0.25rem]" : "placeholder:text-sm placeholder:tracking-normal "}                       
                            rounded-xl 
                            font-semibold 
                            pl-4 
                            mt-4 
                            bg-[#f0f0f0] 
                            focus:bg-white 
                            hover:bg-[#e7e7e7] 
                            text-[#222222] 
                            w-[25rem] 
                            h-[3rem] 
                            
                            
                          
                            `}
                          {...field}
                 
                        />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />


              </div>
              {!loading ? (
                <Button
                  type="submit"
                  className="bg-[#FFDD00] font-semibold text-black px-12 py-7 text-lg rounded-full absolute bottom-5 right-16 hover:bg-[#ffcc00]"
                >
                  Sign up
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
      
    </>
  )
}
