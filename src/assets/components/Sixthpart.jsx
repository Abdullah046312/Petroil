import React from 'react'
import logo from "../../assets/logo.png"
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneBluetoothSpeaker } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Sixthpart = () => {
  return (
    <section className='bg-[#1F1F1F]'>
        <div className="max-w-container mx-auto">
            <div className="p-20">
                <div className="w-2/5">
                <img src={logo} alt="" />
                <div className="flex items-center gap-2 mt-8">
                    <TfiEmail className='text-white'/>
                    <p  className='text-white font-poppins'>mail@yourcompany.com</p>
                </div>
                <div className="flex items-center gap-1 mt-2.5">
                    <MdPhoneBluetoothSpeaker className='text-white'/>
                    <p  className='text-white font-poppins'>+896 120 5889 (Toll free)</p>
                </div>
                <div className="flex items-center gap-1 mt-2.5">
                    <FaMapLocationDot className='text-white'/>
                    <p  className='text-white font-poppins'>101 Baker Street, New York, USA, 12345</p>
                </div>
                <div className="flex items-center gap-x-3 mt-2.5">
                    <ImFacebook2 className='text-[#F40404]'/>
                    <BsTwitter className='text-[#F40404]'/>
                    <FaLinkedin className='text-[#F40404]'/>
                    <FaInstagramSquare className='text-[#F40404]'/>
                   
                </div>
                </div>
                {/* <div className="w-1/5">
             
                </div>
                <div className="w-1/5">
                
                </div>
                <div className="w-1/5"></div> */}
                
            </div>
        </div>
    </section>
  )
}

export default Sixthpart
