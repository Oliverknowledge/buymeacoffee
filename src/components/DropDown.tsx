"use client"

import * as React from "react"
import Link from "next/link"
import { faCircleQuestion} from  '@fortawesome/free-solid-svg-icons';
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";


const information = [
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} className = "h-5 ml-1 mb-1 inline-flex" />,
        title: "Help center",
    },
    {
        icon: <FontAwesomeIcon icon={faApple}  className = "h-5 ml-1 mb-1 inline-flex " fill="black" />,
        title: "iOS",
    },
    {
        icon: <FontAwesomeIcon icon={faAndroid}  className = "h-5 ml-1 mb-1 inline-flex " fill="black" />,
        title: "Andriod"
    }
]

export function DropDown({Footer, title}: {Footer: boolean, title: string}){
  return (
    <NavigationMenu className = "rounded-xl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className = {`font-semibold text-md ${Footer ? "bg-[#FAF8F0] hover:bg-[#FAF8F0]" : "bg-white "} `}>{title}</NavigationMenuTrigger>
          {!Footer && (
          <NavigationMenuContent className = "rounded-xl shadow-md ">
            <NavigationMenuLink asChild>
              <Link
                href="/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between"
              >
                <section className = "w-[12.5rem]">
                    {information.map((item) => (
                        <div key = {item.title} className = "flex flex-col items-start">
                            <div className = {`flex-row flex hover:bg-gray-100 px-2 py-4 rounded-lg  w-full  `}>
                                {item.icon}
                                <p className = "text-normal ml-4">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </section>  
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
)}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}


