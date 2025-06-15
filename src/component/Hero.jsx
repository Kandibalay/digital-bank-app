import React from 'react'
import img1 from "../assets/images/image-mockups.png"

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8 pl-6 pr-6 md:pl-10 md:pr-0 lg:pl-14 items-center justify-items-center container mx-auto'>
        <div className='flex flex-col gap-4 justify-center md:justify-start items-center md:items-start order-2 md:order-1' >
            <h1 className='text-[36px] lg:text-[48px] w-full md:w-[80%] 2xl:w-[60%] text-[#2d314d] leading-14 text-center md:text-left'>Next generation digital banking</h1>
            <p className='text-[14px] md-text-base w-full md:w-[80%] 2xl:w-[60%] text-[#9698a6] text-center md:text-left'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className='w-[60%] md:w-[35%] text-[14px] md-text-base py-2 rounded-full bg-linear-to-r from-[#31d35c] to-[#9698a6] text-white'>Request Invite</button>
        </div>
        <div className='hero order-1 md:order-2'>
            <img src={img1} alt="digital banking dashboard" className='w-full md:w-[80%]'/>
        </div>
    </div>
  )
}

export default Hero