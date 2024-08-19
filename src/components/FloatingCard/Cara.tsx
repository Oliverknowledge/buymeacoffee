
import { easeOut,  useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef} from 'react'
import { motion } from "framer-motion"

const Cara = () => {
    const ref = useRef(null);
    const { scrollY, scrollYProgress } = useScroll();
     
    const x = useTransform(scrollY, [0, 400], [0, -250]); // Moves left from 0 to -300px
    const y = useTransform(scrollY, [0, 400], [0, -50]);  // Moves down from 0 to 100px
    
    // Adjusted opacity range to start changing earlier
    const opacity = useTransform(scrollY, [0, 75, 125, 250], [1, 0.7, 0.4, 0]); // Opacity stages: 1 -> 0.5 -> 0
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });
    const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });
  
    const rotate = useTransform(scrollYProgress,
      [0,1],
      [2, 15],
      {ease: easeOut},
      );
  return (
    <motion.div 
    ref={ref}  style = {{
      rotate,
    
  x: springX,
  y: springY,
opacity: springOpacity
    }}
    // Ensure animation resets to original state
  transition={{
    type: 'spring',
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  }} >
    <a className="border-2 rounded-3xl  absolute -top-[33.5rem] -left-3 border-gray-100 shadow-md block" href="https://buymeacoffee.com/cara.app" target="_blank" data-v-23be58bd="">
    <Image src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v14_1.png"  width="190" height="190" alt="support" data-nuxt-img=""  className="hover:scale-103 transform duration-200" />
    </a>
    </motion.div>
   
  )
}

export default Cara