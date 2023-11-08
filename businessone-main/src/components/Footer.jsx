import React from 'react'
import {LiaStarSolid} from 'react-icons/lia'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl'
import { Menu } from '../Menu'
function Footer() {
  return (
    <div className='bg-[#30303c] px-6 py-10 text-gray-400 text-center'>
      <div className='max-w-7xl md:w-[80%] mx-auto lg:w-[95%]'>

     <img className='w-80 mx-auto' src="/mine.png" alt="" />
     <div className='flex justify-center items-center py-4'>
      <LiaStarSolid className='text-yellow-400 text-2xl'/>
      <LiaStarSolid className='text-yellow-400 text-2xl'/>
      <LiaStarSolid className='text-yellow-400 text-2xl'/>
      <LiaStarSolid className='text-yellow-400 text-2xl'/>
      <LiaStarSolid className='text-yellow-400 text-2xl'/>
     </div>
     <p className='text-xl'>Overall client rating is 4.9 out of 8,500 clients for Wingency</p>
     <div className='flex text-orange-600 items-center space-x-4 max-w-3xl mx-auto justify-around text-2xl  py-10'>
          <SlSocialFacebook/>
          <SlSocialInstagram/>
          <SlSocialLinkedin/>
          <SlSocialYoutube/>
      </div>
      <div className='text-xl grid grid-cols-3 gap-6 md:flex md:flex-row justify-between space-x-4 py-10 max-w-5xl mx-auto'>
      <Menu/>
      </div>
      <p className='py-4'>We are tracking any intention of piracy.</p>
      <p>Copyright © 2023 Wingency. All rights reserved. Template By Win Aung</p>
      </div>
    </div>
  )
}

export default Footer