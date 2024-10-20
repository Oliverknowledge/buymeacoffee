"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { LoginForm } from '@/components/LoginForm';
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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


const LogIn = () => {
  const ref = useRef(null)
  return (  
    <motion.div className = "w-full h-full" variants = {containerVariants} 
    initial="hidden"
    animate="visible"
    ref={ref}>
      <motion.div variants = {itemVariants} >
      <div className = "top-0 w-full h-[10rem]">
        <Link href = "/" >
          <Image alt = "Logo" src = "/bmc-brand-logo/bmc-brand-icon.png" width = {30} height = {30} className = "translate-y-[2.5rem] translate-x-[4rem]"/> 
        </Link>
      </div>
      <h1 className = "flex justify-center font-semibold text-4xl">Welcome Back</h1>
      <div className = "w-full py-5 flex flex-col  justify-center items-center">
        <div className = "w-[80%] h-[20rem]  flex justify-center items-center">
            
        <LoginForm/>
        </div>
      </div>
      </motion.div>
    </motion.div>
  )
};

export default LogIn;