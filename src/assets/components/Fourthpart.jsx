import React from 'react'
import images9 from "../../assets/images9.png"
import images10 from "../../assets/images10.png"


const Fourthpart = () => {
  return (
   <section>
    <div className="max-w-container mx-auto">
        <div className="pt-10 pb-11 flex ">

        <div className="w-1/4">
        <h2 className='text-[36px] font-poppins font-semibold bg-[#F40404] px-10 py-20 text-white h-[361px]'>Learn more about our company</h2>
        </div>
        <div className="w-9/12 h-[361px]">
        <img src={images9} alt="" />
        </div>
        </div>
    </div>
    <div className="bg-[#F0F0F0] py-11">

    <div className="max-w-container mx-auto ">
        <div className="py-11">
        <img src={images10} alt="" />
        </div>
    </div>
    </div>
   </section>
  )
}

export default Fourthpart
