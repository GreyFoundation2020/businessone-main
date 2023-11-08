import React from 'react'
import { Leftside } from './Leftside'
import { Rightside } from './Rightside'

export const About = () => {
  return (
    <div className='bg-gray-50 py-10 px-6'>
      <div className='lg:flex max-w-7xl md:w-[80%] mx-auto'>

      <Leftside/>
      <Rightside/>
      </div>
    </div>
  )
}
