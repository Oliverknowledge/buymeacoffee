"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Membership } from '../../data/LandingData'

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
      duration: 0.6 ,
      ease: "easeOut",
    },
  },
};
const Memberships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      className="w-[70rem] h-[55rem] bg-white rounded-[3.5rem] items-center flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants = {itemVariants}>
      <div className="mt-11 h-[40rem] w-[55rem] relative"> {/* Relative positioning for stacking */}
        <motion.h3
          className="font-[650] text-[#717171] text-5 uppercase tracking-[.125rem]  flex justify-center"
          
        >
          memberships
        </motion.h3>
        <motion.h1
          className="font-bold text-6xl leading-[5rem] tracking-tight"
          
        >
          Start a membership for <br /> your biggest fans.
        </motion.h1>
        <motion.p
          className="w-9/12 leading-8 text-2xl pt-5  ml-[5.5rem] ps-[3rem] mt-2"

        >
          Earn a recurring income by accepting monthly or yearly subscriptions. Share exclusive content, or just give them a way to support your work on an ongoing basis.
        </motion.p>                           
      <motion.div className = "bg-white border border-gray-200 shadow-md flex flex-col rounded-2xl w-[7.5rem] h-[9rem] absolute -bottom-6 -left-5  z-10  ">
        <Image src = "https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_group_1.png" width = "70" height = "8" alt = "Creators" className = "translate-x-5 mt-6"/> 
        <h1 className = "text-4xl mt-3 mr-4  ">286</h1>
        <h3 className  = " text-gray-400 tracking-tight mt-1  mr-2">Members</h3>
      </motion.div>
      <motion.div  className = "bg-white border border-gray-200 shadow-md flex flex-col p-4 h-[6rem] absolute z-10 -right-24 tranlsate-x-4 bottom-1 rounded-3xl pb-2 " >
        <div className = "flex flex-row items-center">
        <Image src = "/banking.svg" width = "40" height = "40" alt = "bank"/>
        <div className = "flex flex-col text-start">
          <h2 className = "font-bold text-2xl ml-2 pt-1 ">$1,500</h2>
          <p className = "text-gray-600  text-sm ml-2 mt-2 ">Earned this month</p>
        </div>
        </div>
      </motion.div>
        <div className="w-[60rem] h-[27rem] absolute mt-10 -translate-x-10   mr-10 flex justify-center"> {/* Centered flex container */}
          {Membership.map((item, index) => (
            <motion.article
              className={`w-[20rem] border shadow-md  border-gray-200 bg-white rounded-[2rem] flex flex-col items-center justify-center  ${item.className}`} // Apply the className for custom positioning
              key={item.title}
              
              style={{ zIndex: Membership.length - index }} // Stack in reverse order
            >
              <Image src={item.img} alt={item.title} width={200} height={100} className="w-[20rem] px-8 py-4 absolute -translate-y-[6rem]" />
              <h1 className={`font-bold text-xl tracking-wide translate-y-12 ${item.title === "Pro membership" ? "text-xl" : "text-lg"}`}>{item.title}</h1>
              <h3 className={`text-sm absolute pt-10 ${item.title === "Pro membership" ? "font-medium" : "font-normal"}`}>${item.cost}/month </h3>
              <div className="translate-y-20 text-start">
                {item.features.map((per) => (
                  <p className={`pb-4 ${item.title === "Pro membership" ? "font-medium text-[0.875rem]" : "font-normal text-[0.75rem]"}`} key={per}> ✓ {' '} {per}</p>
                ))}
              </div>
              <div className="rounded-full font-extrabold bg-[#51CBFF] py-3 px-24 mt-2 text-[0.7rem] absolute translate-y-40">Join</div>
            </motion.article>
          ))}
        </div>
      </div>
          </motion.div>
    </motion.article>
  )
}

export default Memberships
