import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { DropDown } from './DropDown';

const Footer = () => {
  return (
    <div className = "mt-5 h-[5rem] w-full ml-4 flex flex-row justify-between bg-[#FAF8F0]">
        <h3 className = "text-xl text-gray-600 text-left">© Buy Me a Coffee</h3>
        <section className = "flex  flex-row w-[35rem] gap-x-2 bg-[#FAF8F0] ">
            <Link className = "font-semibold hover:text-gray-600" href = "/about">About</Link> 
            <Link className = "font-semibold hover:text-gray-600 ml-2" href = "/">Help Center</Link>
            <div className = "-translate-x-2 -translate-y-2 ">
            <DropDown Footer = {true} title = "Apps"/>
        </div>   
            <div className = "-translate-x-8 -translate-y-2 ">
            <DropDown Footer = {true} title = "Resources"/>
        </div>
        <Link className = "font-semibold hover:text-gray-600 -translate-x-10  " href = "/about">Privacy</Link> 
            <Link className = "font-semibold hover:text-gray-600 -translate-x-10 ml-1" href = "/">Terms</Link>
        </section>
        <section className = "w-[10rem] gap-x-6 flex flex-row">
            <Link href = "https://x.com/buymeacoffee"  target = "_blank">
                <motion.img src = "/x.svg" height = "30" width = "30" alt = "x"  
                    whileHover = {{scale: 1.1}}
                    whileTap = {{scale: 0.9}}
                />
            </Link>
            <Link href = "https://youtube.com/buymeacoffee"  target = "_blank">
                <motion.img src = "/youtube.svg" height = "30" width = "30" alt = "youtube"
                whileHover = {{scale: 1.1}}
                whileTap = {{scale: 0.9}} 
                />
            </Link>
            <Link href = "https://instagram.com/buymeacoffee" target = "_blank">
                <motion.img src = "/instagram.svg" height = "30" width = "30" alt = "instagram" 
                whileHover = {{scale: 1.1}}
                whileTap = {{scale: 0.9}}
                />
            </Link>
        </section>
    </div>

  )
}

export default Footer