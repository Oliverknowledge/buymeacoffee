import { easeOut,  useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef} from 'react'

import { motion } from "framer-motion"

const SimplePolitics = () => {
    const ref = useRef(null);
    const { scrollY, scrollYProgress } = useScroll();
     
     const x = useTransform(scrollY, [0, 225], [0, 250]); // Moves left from 0 to -300px
     const y = useTransform(scrollY, [0, 225], [0, -1])
     const opacity = useTransform(scrollY, [0, 75, 125, 300], [1, 0.7, 0.4, 0]); // Opacity stages: 1 -> 0.5 -> 0
     const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });


     // Moves down from 0 to 100px
    
    // Adjusted opacity range to start changing earlier
    const rotate = useTransform(scrollYProgress,
      [0,1],
      [-5,20],
      {ease: easeOut},
      );
  return (
    <motion.div 
    ref={ref}  
    style = {{
    rotate,
    x: springX,
    y: springY,
  opacity: springOpacity}}
  
  transition={{
    type: 'spring',
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  }}
    ><a className="border-2 rounded-3xl  absolute -top-[6rem] right-[7.5rem] border-gray-100 shadow-md block" href="https://buymeacoffee.com/kaleighcohen" target="_blank" data-v-23be58bd="">
        <Image src= "https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v9_2.png"  width="192" height="172" alt="support" className="hover:scale-103 transform duration-200" data-v-23be58bd=""/>

        </a>
    </motion.div>

  )
}

export default SimplePolitics