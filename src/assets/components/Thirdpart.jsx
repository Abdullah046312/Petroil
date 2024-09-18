import React from 'react'
import images6 from "../../assets/images6.png"
import images7 from "../../assets/images7.png"
import images8 from "../../assets/images8.png"

const Thirdpart = () => {
  return (
    <section>
        

        <div className="flex  ">
            <div className="w-1/2 pl-96 pt-20">
            <h2 className='text-[64px] font-bold font-poppins'>Our Services</h2>
            <p className='text-[16px] font-medium font-poppins'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="w-1/2 pt-5">
            <img src={images6} alt="" />
            </div>
        </div>
        
        <div className="flex">
            <div className="w-1/2">
            <img src={images7} alt="" />
            </div>
            <div className="w-1/2">
            <img src={images8} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Thirdpart
