import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneBluetoothSpeaker } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Header = () => {
  return (
    <section className='py-3 bg-hbg'>
        <div className="max-w-container mx-auto font-poppins">
            <div className="flex items-center">
                <div className="w-1/4">
                <div className="flex items-center gap-2">
                    <TfiEmail className='text-white'/>
                    <p  className='text-white'>mail@yourcompany.com</p>
                </div>
                </div>
                <div className="w-1/4">
                <div className="flex items-center gap-1">
                    <MdPhoneBluetoothSpeaker className='text-white'/>
                    <p  className='text-white'>+896 120 5889 (Toll free)</p>
                </div>
                </div>
                <div className="w-1/2">
                <div className="flex items-center gap-x-3 justify-end">
                    <ImFacebook2 className='text-white'/>
                    <BsTwitter className='text-white'/>
                    <FaLinkedin className='text-white'/>
                    <FaInstagramSquare className='text-white'/>
                   
                </div>
                </div>
            </div>
       
       
        </div>

    </section>
  )
}

export default Header
