"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Cards, profilePictures } from '../../../../data/CarouselCards'
import { animate, useMotionValue, motion } from 'framer-motion'
import Link from 'next/link'
import { UsernameForm } from '@/components/UsernameForm'

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
const SignUp = () => {
  const ref = useRef(null);
  const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4,5])
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 6)
      return updateIndexes;
    })
  }
 
  
  const firstButton = () => {
    setPositionIndexes((prevIndexes) => {

      if (prevIndexes[0] === 2 || prevIndexes[0] === 5) {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex +  10 ) % 6)
      return updateIndexes;
      }
      else if (prevIndexes[0] === 0 ) {
        return [0,1,2,3,4,5]
      }
      else if (prevIndexes[0] === 3){
        return [3,4,5,0,1,2]
      }
      else{
        const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 5) % 6)
        return updateIndexes; 
      }
    })
  }
  const secondButton = () => {
    setPositionIndexes((prevIndexes) => {

      if (prevIndexes[0] === 0 || prevIndexes[0] === 3) {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex +  1 ) % 6)
      return updateIndexes;
      }
      else if (prevIndexes[0] === 2) {
        return [1,2,3,4,5,0]
      }
      else if (prevIndexes[0] === 5){
        return [4,5,0,1,2,3]
      }
      else{
        const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 5) % 6)
        return updateIndexes; 
      }
    })
  }
  const thirdButton = () => {
    setPositionIndexes((prevIndexes) => {

      if (prevIndexes[0] === 1 || prevIndexes[0] === 4) {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1  ) % 6)
      return updateIndexes;
      }
      else if (prevIndexes[0] ===  2) {
        return [2,3,4,5,1,0]
      }
      else if (prevIndexes[0] === 5){
        return [5,0,1,2,3,4]
      }
      else{
        const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex  + 1 ) % 6 )
        const updatedIndexes = updateIndexes.map((prevIndex) => (prevIndex + 1) % 6)
        return updatedIndexes; 
      }
    })
  }
  const positions = [
    'right',
    'center',
    'left',
    'right1',
    'right2',
    'right3',
  ]
  const imageVariants = {
    center: {x: '15%', scale: 1, zIndex: 2 },
    left: {x: '-85%', scale: 0.9, zIndex: 1, opacity: 0.5 },    
    right: {x: '115%', scale: 0.9, zIndex: 1, opacity: 0.5},
    right1: {x: '-100%', scale: 0.5, zIndex: 0, opacity: 0},
    right2: {x: '-120%', scale: 0.5, zIndex: 0, opacity: 0 },
    right3: {x: '140%', scale: 0.5, zIndex: 0, opacity: 0},

  }
  const array = [0,1,2,3,4]
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 2500)
    return () => clearInterval(interval)
  })

  return (
    <motion.div className = "h-full w-full grid grid-cols-6 bg-[#FFDD00] " 
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate= "visible"
    >
      <div className = "h-full  col-span-2  relative overflow-hidden">
        <div className = "h-[55.9rem] pt-10 mx-10 ">
        <Image src = "/signupcoffee.svg" width = "40" height = "40" alt = "logo" className = ""/>
        <h3 className = "mt-7 ml-2">Welcome to Buy Me a Coffee</h3>
        <div className = "my-12 h-[50rem]  translate-y-[3rem]   ">
          <ol className = "flex flex-row  left-0 w-full   ">
            {[...Cards, ...Cards].map(({title, desc, img}, index) =>
            <motion.li key = {index} className = "bg-white h-[27.5rem]  xl:w-[22.5rem]  rounded-3xl " initial = "center" animate = {positions[positionIndexes[index]]}
            variants = {imageVariants} transition = {{duration: 0.5}} style = {{position: 'absolute'}}
          > 
          <h3 className = "text-xl font-bold text-center pt-14 pb-2 ">
            {title}
          </h3>
          <h4 className = "text-sm font-normal px-16 pb-2 text-center">
              {desc}    
          </h4>
          <motion.img  src={img} width = "300" height = "300" alt = {title} className = "mx-auto "/>
        </motion.li>
        
            )}
            </ol>
            <div className = "flex flex-row w-[20rem] ml-16 justify-center mt-250 h-[10rem] gap-x-4 translate-x-[5rem]">
            <button onClick = {firstButton} className = {`rounded-full  absolute translate-y-[30rem] -translate-x-[5rem] w-[7px] h-[7px] ${positionIndexes[0] === 0 || positionIndexes[3] === 0   ? 'bg-black' : 'bg-[#2222224d] hover:bg-black' }`}/> 
            <button onClick = {secondButton} className = {`rounded-full absolute translate-y-[30rem] -translate-x-[4.2rem] w-[7px] h-[7px] ${positionIndexes[1] === 2 || positionIndexes[4] === 2 ? 'bg-black' : 'bg-[#2222224d] hover:bg-black'}`}/>
            <button onClick = {thirdButton} className = {`rounded-full absolute translate-y-[30rem] -translate-x-[3.4rem] w-[7px] h-[7px] ${positionIndexes[2]  === 4 || positionIndexes[5] === 4  ? 'bg-black' : 'bg-[#2222224d]  hover:bg-black'}`}/>
            
         </div>
              <div className = "relative translate-y-[25rem]">
                <div className = "flex flex-row">
                  {profilePictures.map(({img}, index) => (
                    <Link href = "/" key = {index} className = "translate-x-[4em] translate-y-[1rem]">
                    <div  className = {`border-[6px] rounded-full h-14 w-14  border-[#FFDD00] -ml-6 `}>
                      <Image src = {img} width = "40" height = "40" alt = "profile" className = "object-cover w-10 h-10 rounded-full"/>
                    </div>
                    </Link>
                  ))}
                  
                  {array.map((index) => (
                    <div key = {index} className = "flex flex-row">
                    <Image src  = "/star.svg" width = "40" height = "40" alt = "rating" className = "object-cover w-4 h-4 rounded-full translate-y-[1rem] translate-x-[4rem]"/>
                  </div>))}
                  <p className = "mt-8 -ml-3.5">Loved by 1,000,000+ creators</p>
                  
                </div>
              </div>
         </div>
        </div>
      </div>
      <div className = "h-full w-full col-span-4 rounded-l-[2rem] bg-white relative rounded-lg">
        <div className = "absolute right-0 flex flex-row p-10">
              <p>Already have an account?</p>
              <Link className = "ml-2 underline" href = "/login">Log in</Link>
        </div>
        <motion.div className = "flex items-center justify-center h-[90%] w-[100%] " initial = "hidden" animate = "visible" variants = {itemVariants}>
          <div className ="flex flex-col">
          <h2 className = "font-semibold text-3xl">
            Create your account
          </h2>
          <h3 className = " text-gray-400 text-md">
            Choose a username for your page
          </h3>
            <UsernameForm/>
          </div>
        </motion.div>
          <div className = " -translate-y-[1rem] absolute w-full h-[1px] bg-gray-200 "/>
            <h3 className = "text-gray-600 ml-16 mt-7 text-sm ">By continuing, you agree to the <span className = "underline text-gray-900">terms of service</span> and <span className = "underline text-gray-800">privacy policy.</span></h3>
      </div>
    </motion.div>
  )
}

export default SignUp