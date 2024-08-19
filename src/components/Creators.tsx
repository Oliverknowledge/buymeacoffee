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

const Creators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[80rem] h-[55rem]  mt-20 mx-auto flex flex-col`}
    >
     
      <motion.div variants = {itemVariants} className = "flex flex-col items-center">
        <h1 className = "text-7xl font-bold leading-[6rem]">Designed for creators, <br/> <span className = "text-gray-600">
            not for businesses.</span></h1>
        <section className = "grid grid-cols-2 grid-rows-2 w-[80rem] h-[40rem] mt-2 gap-x-24 ">
            <div className = "inline-flex flex-row ">
                <Image src = "/tick.svg" height = "60" width = "60" alt = "tick" />
                <h3 className = " text-left text-3xl ml-6 translate-y-[8rem] font-semibold text-gray-500">We don&apos;t call them &quot;customers&quot;  or transactions. They are your
                    <span className = "text-black text-3xl font-bold"> supporters.</span></h3>
             </div>
             <div className = "inline-flex flex-row ">
                <Image src = "/tick.svg" height = "60" width = "60" alt = "tick" />
                <h3 className = " text-left text-3xl ml-6 translate-y-[8rem] font-semibold text-gray-500">
                You have <span className = "text-black font-bold">100% ownership</span> of your supporters. We never email them, and you can export the list any time you like.

                </h3>
             </div>
             <div className = "inline-flex flex-row ">
                <Image src = "/tick.svg" height = "60" width = "60" alt = "tick" className = "-translate-y-[5rem]"/>
                <h3 className = " text-left text-3xl ml-6 translate-y-10 font-semibold text-gray-500">
                You get to <span className = "font-bold text-black">talk to a human</span> for help, or if you just like some advice to hit the ground running.
                </h3>
             </div>
             <div className = "inline-flex flex-row ">
                <Image src = "/tick.svg" height = "60" width = "60" alt = "tick" className = "-translate-y-[5rem]" />
                <h3 className = " text-left text-3xl ml-6 translate-y-10 font-semibold text-gray-500">
                You get paid instantly to your bank account. <span className = "text-black font-bold">No more 30-day delays.</span>
                </h3>
             </div>
        </section>
        </motion.div>
    </motion.article>
  )
}

export default Creators
