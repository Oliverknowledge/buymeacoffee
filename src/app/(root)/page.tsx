"use client";
import Hero from "@/components/Hero";
import Memberships from "@/components/Memberships";
import Shop from "@/components/Shop";
import Support from "@/components/Support";
import Publish from "@/components/Publish"
import { useTransform, useScroll, motion, useMotionValueEvent } from "framer-motion";
import Creators from "@/components/Creators";
import Benefit from "@/components/Benefit";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const { scrollY, scrollYProgress} = useScroll();
  const [ visible, setVisible] = useState(false);
  // Ensure the colors are properly formatted with '#'
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["#FFFFFF", "#FAF8F0"]
  );
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number"){
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05){
        setVisible(false)
      }
      else{
        if (direction < 0){
          setVisible(true)
        }
        else{
          setVisible(false)
        }
      }
     }
  })
  return (
    <motion.div
      style={{
      
        backgroundColor,
      }}
      className={`mx-auto translate-y-[10rem] text-center duration-700 h-full w-full`}
    >
      <Hero />
      <div className="w-full  h-full justify-center mt-24 mb-8 flex ">
        <Support />
        
      </div>
      <div className = "w-full h-full flex justify-center">
      <Memberships />
      </div>
      <div className = "w-full h-full flex justify-center">
      <Shop />
      </div>
      <div>
        <Publish/>
      </div>
      <div className = "w-full h-full flex justify-center mt-10">
        <Creators/>
        </div>
        <div className = "w-full h-full flex justify-center mt-10">
        <Benefit/>
        </div>
        <div className = "w-full h-full flex justify-center mt-10">
        <Footer/>
        </div>
  </motion.div>
  );
}
