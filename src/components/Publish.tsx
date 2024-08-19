"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    y: 50, // Slide-up effect
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

const Publish = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[70rem] h-[55rem] py-8 px-32   mt-10 mx-auto bg-white rounded-[3rem] -flex flex-col`}
    >
     
      <motion.div variants = {itemVariants} className = "">
      <h3 className = " font-[650] text-[#717171] text-md uppercase tracking-[.125rem] flex items-center justify-center">posts, audio & email</h3>
        <h1
          className="font-bold text-6xl leading-[5rem] tracking-tight w-11/12 mx-10"
          
        >
            Publish your best work  
        </h1>
        <p
          className="w-full leading-8 text-2xl flex text-center mx-auto  mt-6"

        >
Buy Me a Coffee makes it easy to publish free and exclusive content. Try different formats such as audio, and make it members-only to drive more memberships.        </p> 
<Image src="/posts.png"  width="200" height="200" alt="Posts" className = "mt-10 w-full h-auto" /> 
        </motion.div>
    </motion.article>
  )
}

export default Publish;
