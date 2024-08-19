"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Features } from '../../data/Features';

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

const Benefit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[95rem] rounded-[3.5rem] h-[65rem] bg-white  mx-auto  flex flex-col`}
    >
     
      <motion.div variants = {itemVariants} className = "flex flex-col mt-[10rem] items-center">
        <h1 className = "text-7xl font-bold leading-[6rem]">Make 20% or more, <br/> <span className = "text-gray-500">
            compared to other platforms.</span></h1>
        <div className = "grid grid-cols-3 grid-rows-2 mt-[7.5rem] w-[85rem] gap-y-[2rem] gap-x-[4.5rem] ">
            {Features.map(({img, title, desc }: {img: string, title: string, desc: string}) =>(
                <div className = "inline-flex flex-col text-left " key = {title}>
                    <Image src = {img} height = "60" width = "60" alt = {title}/>
                    <h2 className = "font-bold text-2xl mt-2">{title}</h2>
                    <p className = "text-gray-500 text-2xl mt-3 font-semibold">{desc}</p>
                </div>
            ))}
        </div>
        </motion.div>
    </motion.article>
  )
}

export default Benefit
