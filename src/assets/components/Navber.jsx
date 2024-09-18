import React from 'react'
import logo from "../../assets/logo.png"

const Navber = () => {
  return (
    <section className='bg-[#F40404]'>  

   <div className="max-w-container mx-auto ">
    <div className="flex items-center py-3">

   <div className="w-1/4">
   <img src={logo} alt="" />
   </div>
   <div className="w-3/4">
   <ul className='flex justify-end  text-white '>
    <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Home</li>
    <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>About</li>
    <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Services</li>
    <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Gallery</li>
    <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Blog</li>
    <li className='text-[16px] font-poppins font-semibold border-2 border-white p-3 hover:text-[#282828] duration-300 ease-in-out rounded-lg shadow-lg shadow-indigo-500/40'>CONTACT</li>
    
   </ul>
   </div>
    </div>
   </div>
    </section>
   
    
    
  )
}

export default Navber
