import SideBar from '@/components/SideBar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className = "bg-[#f0f2f5] h-full w-full flex flex-row">
        <div className = "h-full bg-white">
            <SideBar/>  
        </div>
        <div className = "h-full">
            <h1>Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard