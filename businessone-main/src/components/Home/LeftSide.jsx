import React, { useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { AppContextProvider } from '../../App'

export const LeftSide = () => {
  const {handleClickScroll} = useContext(AppContextProvider)
  return (
    <div className='w-full mx-auto' data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="100"
    data-aos-offset="0" >
      <p className='text-orange-600 bg-white rounded-full w-fit px-4 py-1 mx-auto lg:w-fit lg:ml-0'>Hello, We're</p>
      <h1 className='text-5xl font-bold pt-4'>Wingency</h1>
      <h2 className='text-xl font-semibold py-4 2xl:text-3xl'>UI/UX and Graphic Designers</h2>
      <p className='text-xl text-gray-600 2xl:text-2xl 2xl:py-4'>Senior Graphic and UI/UX Designers. We help global brand with digital products on web, mobile and connected platforms.</p> 
      <button onClick={() => handleClickScroll(2)} className='flex gap-2 items-center space-x-3 bg-orange-600 text-white w-40 mx-auto my-8 h-16 rounded-full justify-center lg:ml-0 hover:bg-white hover:text-orange-600 transition-all duration-300 ease-linear hover:border-orange-600 hover:border-2'>Hire Us <FaArrowRight/></button>
    </div>
  )
}
