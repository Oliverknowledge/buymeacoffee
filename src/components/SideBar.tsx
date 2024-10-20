'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'
const SideBar = () => {
  const pathname: string = usePathname();
  
  const [pathActive, setPathActive] = useState(pathname)
  
  return (
    <div className = "w-[15.5rem] h-full bg-white flex flex-col">
      <div>
      <Link href = "/dashboard" className = " mt-4 ml-8 flex items-center">
      <Image src = "/bmc-brand-logo/bmc-brand-icon.png" width = {24} height = {10} alt = "logo" className = ""/>
    </Link>
    </div>
      <div className = "w-[100%] h-full  flex flex-col items-center  mt-4 ">
        <div className = "w-[90%]  ">
          {pathActive == "/dashboard" ? (
            <Link href = "/dashboard" className = " h-10 bg-[#f0f0f0] rounded-xl flex flex-row items-center">
              <Image src = "/HomeYellow.svg" width = {20} height = {20} alt = "Home" className = "ml-5 mt-1  "/>
              <span className = "ml-4 text-sm">Home</span>
            </Link>
          ) : (
            <Link href = "/dashboard" className = " h-10 bg-white hover:bg-[#f0f0f0] active:bg-gray-100 rounded-xl flex flex-row items-center">
              <Image src = "/Home.svg" width = {20} height = {20} alt = "Home" className = "ml-5 mt-1  "/>
              <span className = "ml-4 text-sm">Home</span>
            </Link>
          )}
          <Link href = "/" target = "_blank" className = "hover:bg-[#f0f0f0] bg-white mt-1 h-10 rounded-xl flex flex-row items-center ">
            <Image src = "/viewPage.svg" width = {20} height = {20} alt = "Website" className = "ml-5 mt-1"/>
            <span className = "ml-4 text-sm">View Page</span>
            <Image src = "/Link.svg"  width= {20} height = {20} alt = "Link" className = "flex ml-16  mt-1"/>
            
          </Link>
          {pathActive == "/explore-creators" ? (
            <Link href = "/explore-creators" className = " mt-1 h-10 bg-gray-100 rounded-xl flex flex-row items-center">
              <Image src = "/explore-creators-Yellow.svg" width = {20} height = {20} alt = "Explore-Creators" className = "ml-5 mt-1  "/>
              <span className = "ml-4 text-sm">Explore creators</span>
            </Link>
          ) : (
            <Link href = "/explore-creators" className = " mt-1 h-10 bg-white hover:bg-[#f0f0f0] rounded-xl flex flex-row items-center">
              <Image src = "/explore-creators.svg" width = {20} height = {20} alt = "Home" className = "ml-5 mt-1  "/>
              <span className = "ml-4 text-sm">Explore creators</span>
            </Link>
          )}
        </div>
        <div className = "w-[90%] mt-6 flex flex-col">
          <h3 className = "uppercase text-[#767676]  text-[0.7rem] ml-4  tracking-[.05rem] ">Monetize</h3>
          <Link href = "/supporters" className = {` mt-1 h-10  ${pathActive == "/supporters" ? ("bg-[#F0f0f0]") : ("bg-white hover:bg-gray-100")} rounded-xl flex flex-row items-center`}>
              <Image src = {`${pathActive == "/supporters" ? ("/heartYellow.svg") : ("/heartEmpty.svg") }`} width = {20} height = {20} alt = "Explore-Creators" className = "ml-5 mt-1  "/>
              <span className = "ml-4 text-sm">Supporters</span>
            </Link>
          <Link href = "/membership" className = {` mt-1 h-10  ${pathActive == "/membership" ? ("bg-[#F0f0f0]") : ("bg-white hover:bg-gray-100")} rounded-xl flex flex-row items-center`}>
              <Image src = {`${pathActive == "/membership" ? ("/lockYellow.svg") : ("/membership.svg") }`} width = {20} height = {20} alt = "Explore-Creators" className = "ml-5 mt-1  "/>
              <span className = "ml-4 text-sm">Memberships</span>
            </Link>
          <Link href = "/extras" className = {` mt-1 h-10  ${pathActive == "/extras" ? ("bg-[#F0f0f0]") : ("bg-white hover:bg-gray-100")} rounded-xl flex flex-row items-center`}>
            <Image src = {`${pathActive == "/extras" ? ("/bagYellow.svg") : ("/bag.svg") }`} width = {20} height = {20} alt = "Explore-Creators" className = "ml-5 mt-1  "/>
            <span className = "ml-4 text-sm">Shop</span>
          </Link>
        </div>
      </div>  
    </div>
  )
}

export default SideBar