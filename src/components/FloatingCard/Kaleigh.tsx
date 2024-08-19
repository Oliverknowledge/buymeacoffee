import { easeOut,  useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef} from 'react'

import { motion } from "framer-motion"

const Kaleigh = () => {
    const ref = useRef(null);
    const { scrollY, scrollYProgress } = useScroll();
     
     const x = useTransform(scrollY, [0, 225], [0, -250]);
      // Moves left from 0 to -300px
    // Moves down from 0 to 100px
    
    // Adjusted opacity range to start changing earlier
    const opacity = useTransform(scrollY, [0, 75, 125, 300], [1, 0.7, 0.4, 0]); // Opacity stages: 1 -> 0.5 -> 0
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    
    const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });
  
    const rotate = useTransform(scrollYProgress,
      [0,1],
      [-4, 2],
      {ease: easeOut},
      );
  return (
    <motion.div 
    ref={ref}  style = {{
      rotate,
       x: springX,
    
  opacity: springOpacity}}
   // Ensure animation resets to original state
  transition={{
    type: 'spring',
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  }} >        <a className="border-2 rounded-3xl  absolute -top-[27rem] left-[7rem] border-gray-100 shadow-md block" href="https://buymeacoffee.com/kaleighcohen" target="_blank" data-v-23be58bd="">
        <Image src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v9_4.png"  width="192" height="172" alt="support" className="hover:scale-103 transform duration-200" data-v-23be58bd=""/>

        </a>
    </motion.div>

  )
}

export default Kaleigh