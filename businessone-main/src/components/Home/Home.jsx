import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'
import {ReactComponent as HomeImg} from '../../HomeImg/businessman.svg'
export const Home = () => {
const img = <HomeImg/>
  return (
    <div id='section-1' className='nav w-full h-full xl:h-screen px-4 text-center py-8 pt-40'>
      <div className='lg:w-[95%]  md:w-[80%] xl:max-w-7xl lg:flex   lg:text-left mx-auto'>
      <LeftSide/>
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
    //  data-aos-delay="300"
     data-aos-offset="0"
     className='w-full xl:w-[2800px] h-[500px] mx-auto  '
     >

        <HomeImg className='w-full h-full'/>
      </div>
      {/* <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
    //  data-aos-delay="300"
     data-aos-offset="0" className='w-fit mx-auto lg:w-72 2xl:w-96' src={img} alt="" /> */}
      <RightSide/>
      </div>
    </div>
  )
}
