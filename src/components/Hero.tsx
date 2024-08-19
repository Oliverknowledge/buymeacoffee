
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Cara from './FloatingCard/Cara'
import Kaleigh from './FloatingCard/Kaleigh'
import Stefano from './FloatingCard/Stefano'
import ThrillOfThrift from './FloatingCard/ThrillOfThrift'
import BeachTalkRadio from './FloatingCard/BeachTalkRadio'
import SimplePolitics from './FloatingCard/SimplePolitics'

const container = {
  hidden: { opacity: 1 , scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    }
  }
}
const item = {
  hidden: {y:20, opacity: 0},
  visible: {
    y:0,
    opacity: 1
  }
}
const Hero = () => {

  return(
    <section className = "mx-auto text-center overflow-x-clip ">
    <div className = "justify-center flex flex-row pt-20"> 
    {[1,2,3,4,5].map((item) => (
      <Image key = {item} src = "/star.svg" width = {25} height = {10} alt = "Buy Me a Coffee" className = "mx-1"/>
    ))}
    <p className = "ml-2">Loved by 1,000,000+ creators</p>
   
    </div>
    <div className = "pt-10">
    <h1 className = "text-8xl font-bold ">
      Fund your <br/> creative work
      </h1>

    <h2 className = "mt-4 mb-8 font-normal text-2xl">Accept support. Start a membership. Setup a shop. It&apos;s easier <br/>than you think.</h2>
    <button className = "bg-yellow-300 w-[16rem] h-[5rem] font-bold rounded-full text-2xl hover:bg-yellow-200">Start my page</button>
    <p className = "pt-5">It&apos;s free and takes less than a minute!</p>
    </div>
    <motion.ul 
    variants = {container}  
    initial="hidden"
    animate="visible"
    className = "hidden lg:block">
      <motion.li variants = {item} ><Stefano/></motion.li>
      <motion.li variants = {item} ><Kaleigh/></motion.li>
      <motion.li variants = {item} ><Cara/></motion.li>
      <motion.li variants = {item}><SimplePolitics/></motion.li>
      <motion.li variants = {item}><BeachTalkRadio/></motion.li>
      <motion.li variants = {item}><ThrillOfThrift/></motion.li>
    </motion.ul>
    </section>
  )
}
    
    
export default Hero