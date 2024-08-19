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

const Shop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-[70rem] h-[55rem] py-8  px-32  mt-10 mx-auto bg-white rounded-[3rem] flex flex-col`}
    >
     
      <motion.div variants = {itemVariants} className = "">
        <h3 className = " font-[650] text-[#717171] text-md uppercase tracking-[.125rem] flex items-center justify-center">shop</h3>
        <h1
          className="font-bold text-6xl leading-[5rem] tracking-tight w-11/12 mx-10"
          
        >
          Introducing Shop, <br/> the creative way to sell.
        </h1>
        <p
          className="sleading-8 text-2xl flex text-center mx-auto  mt-4"

        >
          The things you&apos;d like to sell probably do not belong in a Shopify store. Shop is designed from the ground up with creators in mind. Whether it&apos;s a 1-1 Zoom call, art commissions, or an ebook, Shop is for you.
        </p> 
        <div className = "mt-12 w-full   h-[25rem]">
          <div className = " absolute bg-white translate-y-[7.5rem] translate-x-8 flex flex-row shadow-lg rounded-full h-12 w-[14rem] border border-gray-200 ">
            <Image src = "/truck.svg" width = "16" height = "16" alt = "truck" className = "ml-3 mt-2 mr-2 h-8 w-8"/>
            <span className = "mt-3 ml-2 font-semibold">One-tap Checkout</span>
          </div>
          <div className="bg-white absolute w-[16rem] h-[9rem] px-4 border rounded-3xl shadow-md translate-y-[5rem] border-gray-200 translate-x-[40rem] ">
            <span className="block text-black font-medium mt-5 text-lg text-left ml-5" >Liked it? give rating</span>
            <Image src = "/rating.svg" width = "200" height = "100" alt = "rating" className = "mt-4 ml-4"/>
            <div className="w-full" >
              <span className=" w-14 h-6 block translate-x-[8.1rem]  mt-2  text-white bg-black text-[0.77rem] relative pt-0.5  rounded-sm "> 
                <span className = "bg-black h-[8px] absolute rotate-[45deg] w-[8px] -translate-y-1.5 translate-x-3.5"/>
                4 star 
            
            </span>
            </div>
            </div>
            <div className = "translate-x-[6rem] translate-y-[12.5rem] h-[10rem] w-[8.5rem] border border-gray-200 shadow-md  rounded-[50px] flex flex-col items-center absolute bg-white">
              <Image src = "/shop.svg" width = "40" height = "60" alt = "60" className = "mt-4 h-14 w-14"/>
              <h2 className = "font-bold mt-2 text-2xl">753</h2>
              <h4 className = "text-gray-500 font-medium text-sm mt-2 ">Sales</h4>
            </div>
            <div className = "translate-x-[40rem] translate-y-[16.5rem] h-[5rem] w-[12.5rem] flex flex-row items-center rounded-3xl absolute border border-gray-200 shadow-md ">
              <Image src = "/banking.svg" width = "20" height = "20" alt = "bank" className = "ml-2"/>
              <span className = "font-bold text-black ml-1 text-2xl">$244</span>
              <span className = "text-gray-600 text-md ml-2 mt-1">Earnings</span>
            </div>
        <article className = "border border-gray-200 w-[325px]  h-[425px] shadow-md  translate-x-[275px] rounded-3xl ">
            <div className = "bg-[#f7d046] w-full  pt-5 h-[165px] rounded-t-3xl">
              <div className = "bg-white h-8 w-14 rounded-md absolute translate-x-4">
                <h1 className = "uppercase font-semibold  text-xl">.pdf</h1>
              </div>
            <span className = "absolute translate-x-[60px] translate-y-[40px] z-10">
                <Image src = "/twinkle.svg" width = "21" height = "21" alt = "star"/>

            </span>   
            <span className = "absolute -translate-x-[80px] translate-y-[80px] z-10 -rotate-[15deg]">
            <Image src = "/twinkle.svg" width = "21" height = "21" alt = "Shop"/>
            </span>
            <span className = "absolute -translate-x-1/2">
            <Image src = "/DesignEbook.svg" width = "130" height = "130" alt = "Design E-book" className = ""/>
            </span>
            </div>
            <div className = "relative h-[240px] w-full px-5 py-5">
            <h1 className = "text-2xl  text-left  font-semibold">Design E-book</h1>
            <div className = "flex flex-row h-10 mt-4">
              <h2 className = "font-bold text-lg">
                $200
              </h2>
              <div className = "bg-gray-400 w-[1px] h-5 ml-2 mt-1"/>
             
              <Image src = "/star.svg" width = "16" height = "4" alt = "Rating"  className = "h-4 w-8 mt-1" />
              <h3 className = "mt-1x">4.9{' '}(36)</h3>
             
            </div>
              <div className =  "my-3  ">
              <div className="h-5 w-full rounded-xl  bg-gray-200 " />
              <div className = "h-5 w-1/2 rounded-xl  bg-gray-200 mt-4 " />
              
              </div>
              <div className = "w-full h-12  bg-[#f7d046] flex items-center justify-center font-bold rounded-full ">Buy</div>
            </div>

        </article>
        </div>
        </motion.div>
    </motion.article>
  )
}

export default Shop
