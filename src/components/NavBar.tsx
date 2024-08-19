"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { DropDown } from './DropDown'
import Image from 'next/image'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter();
    const { scrollY } = useScroll();
 
    const [visible, setVisible] = useState(true);
   
    useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious();
      // Check if latest is not undefined and is a number
     
   
        if ((latest > previous! || previous === undefined)  && latest > 10) {
          setVisible(false);
        } else {
          setVisible(true);
          }
        
      
    });
  return (
    
        <motion.div
        variants = {{
          visible: {y : 0},
          hidden: {y : "-100%"}
        }}

         initial={{
            opacity: 1,
            y: -100,
          }}
         animate = {visible ? "visible" : "hidden"}
         
          className={cn(
            "bg-white  fixed top-0 inset-x-0 mx-auto z-[5000]",
            
          )}
        >
    <header className = "mb-12 h-12">
    <div className = "flex justify-between  mx-auto px-4 py-4">
      <div className = "flex-row font-semibold items-center inline-flex" >
      <Link href = "/faq" className = "rounded-full ml-2 px-4  py-2 hover:bg-gray-100">
        FAQ
      </Link>
      <Link href = '/reviews' className = "px-4 py-3 pb-2 inline-flex hover:bg-gray-100 rounded-full ">
        Wall of {''}
       <span className = ""> <FontAwesomeIcon icon={faHeart} className = "h-5 ml-1 mb-1 inline-flex" /></span>
      </Link>
      <div className = "mb-1 ml-2">
      <DropDown Footer = {false} title = "Resources"/>
    </div>
      </div>
    <Link href=  "/" className = "inline-flex  items-center mr-12">
   <Image src = "/bmc-brand-logo/bmc-brand-logo.svg" width = {175} height = {10} alt = "Buy Me a Coffee"/>
    </Link>
    <nav className = "mt-1 flex items-center gap-2">
      <Link href = "/about" className = "font-semibold cursor-pointer">About</Link>
      <button className = "rounded-full px-4 py-3   ml-4 font-semibold hover:bg-gray-100" onClick = {() => router.push('/login')}>Log in</button>
      <motion.button className = "bg-yellow-300 rounded-full px-4 py-3 font-semibold  duration-100 " onClick = {() => router.push('/signup')}
        whileHover = {{scale: 1.05}}>Sign up</motion.button>
    </nav>
    </div>
  </header>
  </motion.div>

  )
}

export default NavBar