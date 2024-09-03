"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon, Router } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { motion } from 'framer-motion'
import { fetchUser, setUser } from "@/actions/user.actions"
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger the children animations
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 5, // Slide-up effect
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function UsernameForm() {
  const router = useRouter();
  const [signUpUsername, setSignUpUsername] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [ validation, setValidation ] =  useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
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
      await setUser({
        username: username,
        email: values.email,
        password: values.password
      })
      
    setLoading(false)
    router.push("/complete-your-page")
  }

  return (
    <>
      {!signUpUsername ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={ref}
        >
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-3xl">Create your account</h2>
            <h3 className="text-gray-400 text-md">Choose a username for your page</h3>
          </motion.div>
          <Form {...usernameForm}>
            <form onSubmit={usernameForm.handleSubmit(onSubmitUsername)} className="space-y-8 mt-4">
              <motion.div variants={itemVariants}>
                <FormField  
                  control={usernameForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <h3 className="mt-[12.75px] absolute tracking-wide font-semibold ml-4">
                          buymeacoffee.com/
                        </h3>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="yourname"
                          className="pl-[9.5rem] bg-[#f0f0f0] hover:bg-[#e7e7e7] text-[#222222] focus:bg-white tracking-wide font-semibold w-[25rem]"
                          {...field}
                        />
                         
                      </FormControl>
                      <FormMessage>
                        {validation && "Username already taken"}

                      </FormMessage>
                    </FormItem>
                  )}
                />
              </motion.div>
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
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants} // Add container variants for the second form
          initial="hidden"
          animate="visible"
          ref={ref2}
        >
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-4xl">Welcome, {usernameForm.getValues("username")}</h2>
          </motion.div>
          <Form {...userDetailsForm}>
            <form onSubmit={userDetailsForm.handleSubmit(onSubmitUser)} className="space-y-4 mt-10">
              <motion.div variants={itemVariants}> {/* Add item variants to animate input fields */}
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
                      <Button variant="link" className="absolute translate-x-[20rem] translate-y-1" onClick={() => setShowPassword((prev) => !prev)}>
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


              </motion.div>
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
        </motion.div>
      )}
    </>
  )
}
