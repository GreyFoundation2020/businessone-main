import React from 'react'
import { Leftside } from './Leftside'
import { Rightside } from './Rightside'

export const Contact = () => {
  return (
    <div id='section-2' className='bg-[#fff2e2] py-10 px-6'>
      <div className='md:w-[80%] lg:w-[95%] max-w-7xl mx-auto lg:flex justify-between items-center lg:space-x-20'>
        <Leftside/>
        <Rightside/>
      </div>
    </div>
  )
}
