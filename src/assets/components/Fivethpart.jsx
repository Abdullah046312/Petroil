import React from 'react'
import images11 from "../../assets/images11.png"
import images12 from "../../assets/images12.png"
import images13 from "../../assets/images13.png"
import images14 from "../../assets/images14.png"

const Fivethpart = () => {
  return (
    <section>
        <div className="max-w-container mx-auto">
            <div className="flex p-20 gap-5">
                <div className="w-2/6">
                <img src={images11} alt="" />
                </div>
                <div className="w-2/6">
                <img src={images12} alt="" />
                </div>
                <div className="w-2/6">
                <img src={images13} alt="" />
                </div>
                
            </div>
        </div>
        <div className="">
            <img src={images14} alt="" />

        </div>
        <section className='bg-[#F40404]'>
            <div className="max-w-container mx-auto">
                <div className="p-10 flex items-center">
                <div className="w-4/5">
                <h2 className='font-poppins text-white font font-bold text-[36px]'>Want to join as member branch in your area?</h2>
                
                </div>
                <div className="w-1/5">
                <button className='  bg-[#F40404] px-6 py-2 text-[18px] text-white border-2 hover:bg-[#D6A033] transition duration-700 ease-in-out shadow-gray-1000'>CONTACT</button>
                </div>


                </div>
            </div>

        </section>
    </section>

  )
}

export default Fivethpart
