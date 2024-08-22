import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion';;
const CarouselCard = ({title, desc, img, index}: {title: string, desc: string, img: string, index: number}) => {
  const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4,5])
  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 6)
      return updateIndexes;
    })
  }
  const positions = [
    'center',
    'left',
    'right',
    'right1',
    'right2',
    'right3',
  ]
  const imageVariants = {
    center: {x: '0%', scale: 1, zIndex: 1 },
    left: {x: '-50%', scale: 0.5, zIndex: 0 },    
    right: {x: '50%', scale: 0.5, zIndex: 0 },
    right1: {x: '100%', scale: 0.5, zIndex: 0 },
    right2: {x: '150%', scale: 0.5, zIndex: 0 },
    right3: {x: '200%', scale: 0.5, zIndex: 0 },

  }
  return (
    <motion.li className = "bg-white h-[27.5rem]  rounded-3xl " initial = "center" animate = {positions[positionIndexes[index]]}
      variants = {imageVariants} transition = {{duration: 0.5}} style = {{width: "40%", position: "absolute"}}
    > 
    <h3 className = "text-xl font-bold text-center pt-14 pb-2 ">
      {title}
    </h3>
    <h4 className = "text-sm font-normal px-16 pb-2 text-center">
        {desc}    
    </h4>
    <motion.img  src={img} width = "300" height = "300" alt = {title} className = "mx-auto "/>
  </motion.li>
  
  )
}

export default CarouselCard