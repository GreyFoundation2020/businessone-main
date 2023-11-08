import React from 'react'
import img from '../../AboutImg/about.png'
import { ReactComponent as AboutImg } from '../../Teamimg/team.svg'
export const Leftside = () => {
  return (
    <div className='w-[90%] mx-auto object-contain'>
      <AboutImg/>
        {/* <img className='w-[90%] mx-auto object-contain' src={img} alt="" /> */}
    </div>
  )
}
