import React from 'react'
import { WorkCard } from '../../OurWork/WorkCard'
import {ReactComponent as Img1} from '../../techUsedImg/android.svg'
import {ReactComponent as Img2} from '../../techUsedImg/apple.svg'
import {ReactComponent as Img3} from '../../techUsedImg/physics.svg'
// import {ReactComponent as Img4} from '../../techUsedImg/win.svg'
import { DiMongodb, DiReact } from 'react-icons/di'
import { BiLogoFirebase } from 'react-icons/bi'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { SiBootstrap, SiSanity, SiTailwindcss } from 'react-icons/si'
import { TechCard } from './TechCard'
import ClientsReview from '../ClientsReview'
export const Tech = () => {
    
    const data = [
        {
          img: <DiReact/>,
          title: "React",
          describe: "We don't just build websites, we build websites that SELLS",
          color: 'text-blue-400'
        },
        {
          img: <BiLogoFirebase/>,
          title: "Firebase",
          describe: "We don't just build websites, we build websites that SELLS",
          color: 'text-orange-600'
        },
        {
            img: <DiMongodb/>,
            title: "MongoDB",
            describe: "We don't just build websites, we build websites that SELLS",
            color: 'text-green-500'
        },
        {
            img: <DiReact/>,
            title: "React Native",
            describe: "We don't just build websites, we build websites that SELLS",
            color: 'text-black'
        },
        {
          img: <SiSanity/>,
          title: "Sanity.io",
          describe: "We don't just build websites, we build websites that SELLS",
          color: 'text-red-500'
        },
        {
          img: <SiTailwindcss/>,
          title: "Tailwind CSS",
          describe: "We don't just build websites, we build websites that SELLS",
          color: 'text-[#06b6d4]'
        },
        {
          img: <TbBrandFramerMotion/>,
          title: "Framer Motion",
          describe: "We don't just build websites, we build websites that SELLS",
          color: 'text-gray-500'
        },
        {
          img: <SiBootstrap/>,
          title: "Bootstrap",
          describe: "We don't just build websites, we build websites that SELLS",
          color: 'text-[#563d7c]'
        },
    
      ]
      return (
        <>
        <div className='text-center py-10 px-4 md:w-[80%] lg:w-[95%] mx-auto max-w-7xl'>
          <h1 className='text-3xl font-extrabold'>Technologies we work with</h1>
          <div className='py-10 text-start grid grid-cols-2 gap-6 md:flex md:flex-wrap justify-center'>
            {data.map(item => (
                <TechCard title={item.title} describe={item.describe} color={item.color} img={item.img}/>
                ))}
          </div>
        </div>
           <ClientsReview/>
        </>
      )
}
