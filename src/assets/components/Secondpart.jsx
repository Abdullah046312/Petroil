import React from 'react'
import images2 from "../../assets/images2.png"
import images3 from "../../assets/images3.png"
import images4 from "../../assets/images4.png"
import images5 from "../../assets/images5.png"

const Secondpart = () => {
  return (
    <section>
        <div className="flex w-[100%]">
            <div className="w-1/4">
            <img src={images2} alt="" />
            </div>
            <div className="w-1/4">
            <img src={images3} alt="" />
            </div>
            <div className="w-1/4">
            <img src={images4} alt="" />
            </div>
            <div className="w-1/4">
            <img src={images5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Secondpart
