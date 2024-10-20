"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import OnboardingForm from '@/components/OnboardingForm'
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const Page = () => {
    const [progressArray, setProgressArray] = useState([1, 0, 0]); // First bar starts at 1, the others at 0
    const controlsArray = [useAnimation(), useAnimation(), useAnimation()];
    const [isInitialRender, setIsInitialRender] = useState(true); // Track if it's the initial render
    const router = useRouter();
  
    useEffect(() => {
      // Set a timeout to ensure the first render is complete before starting animations
      const timer = setTimeout(() => {
        setIsInitialRender(false);
      }, 0); // Timeout with 0ms to ensure it's called after the initial render
  
      return () => clearTimeout(timer); // Clean up the timeout on unmount
    }, []);
  
    useEffect(() => {
      if (!isInitialRender) {
        // Start the animation for the first progress bar immediately
        controlsArray[0].start({
          scaleX: 1, // Animate the first progress bar to full width
          transition: {
            duration: 3, // Duration of the animation
            ease: [0.4, 0, 0.2, 1], // Custom easing for smooth acceleration and deceleration
          }
        });
  
        // Handle the other progress bars based on user interaction
        progressArray.slice(1).forEach((progress, index) => {
          controlsArray[index + 1].start({
            scaleX: progress,
             // Fade in when progress is greater than 0
            transition: {
              duration: 3, // Duration of the animation
              ease: [0.4, 0, 0.2, 1], // Custom easing for smooth acceleration and deceleration
            }
          });
        });
      }
    }, [progressArray, isInitialRender, controlsArray]);
    function progressbar() {
        setProgressArray(prevProgress => {
          const newProgress = [...prevProgress];
          const nextIndex = newProgress.findIndex(val => val < 1); // Find the next section that needs progress
          if (nextIndex !== -1) {
            newProgress[nextIndex] = Math.min(newProgress[nextIndex] + 1, 1); // Increment progress for that section
          }
          return newProgress;
        });
      }
    
  return (
    <motion.div className="w-full h-full flex flex-col items-center justify-center" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="flex flex-row items-end justify-between h-[10vh] w-full px-12">
        <Link href="/"><Image src="/bmc-brand-logo/bmc-brand-icon.png" width="25" height="25" alt="logo" /></Link>
        <Button variant="outline" size="sm" className="font-semibold w-[5rem]" onClick={() => { router.push("/") }}>Logout</Button>
      </div>
     
          <OnboardingForm progress={progressbar} />
       

      {/* First Progress Section */}
      <div className="absolute w-[33%] h-1 bottom-28 bg-gray-200 left-0">
        <motion.div
          initial={{ scaleX: 0 }}
          style={{ originX: 0 }}
          animate={controlsArray[0]}
          className="bg-black h-1 w-full"
         
        />
      </div>

      {/* Second Progress Section */}
      <div className="absolute w-[33%] h-1 bottom-28 bg-gray-200">
        <motion.div
          initial={{ scaleX: 0 }}

          style={{ originX: 0 }}
          className="bg-black h-1 w-full"
          animate={controlsArray[1]}
        />
      </div>

      {/* Third Progress Section */}
      <div className="absolute w-[33%] h-1 bottom-28 bg-gray-200 right-0">
        <motion.div
          initial={{ scaleX: 0 }}
          style={{ originX: 0 }}
          className="bg-black h-1 w-full"
          animate={controlsArray[2]}
        />
      </div>
    </motion.div>
  );
}

export default Page;
