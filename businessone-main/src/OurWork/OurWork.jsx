import React from 'react'
import { WorkCard } from './WorkCard'
import { FaArrowRight } from 'react-icons/fa'
import img1 from '../WorkImg/app.png'
import img2 from '../WorkImg/website.png'
import img3 from '../WorkImg/uxui.png'
import img5 from '../WorkImg/marketing.png'

export const OurWork = () => {
  
  const data = [
    {
      img: img1,
      title: "App Development",
      describe: "We don't just build websites, we build websites that SELLS",
      color: 'bg-orange-400'
    },
    {
      img: img2,
      title: "Web Design",
      describe: "We don't just build websites, we build websites that SELLS",
      color: 'bg-purple-200'
    },
    {
      img: img3,
      title: "UI/UX Design",
      describe: "We don't just build websites, we build websites that SELLS",
      color: 'bg-yellow-200'
    },
 
    {
      img: img5,
      title: "Digital Marketing",
      describe: "We don't just build websites, we build websites that SELLS",
      color: 'bg-[#DCDCDC]'
    },
  ]
  return (
    <div id='section-3' className='text-center py-10 px-4 bg-black text-white'>
      <h1 className=' py-5 uppercase text-orange-600'>Quality Work</h1>
      <p className='text-3xl font-extrabold'>Some of our Finest Work</p>
      <div className='py-10 text-start flex flex-col gap-6 md:grid md:grid-cols-3 mx-auto md:w-[80%] lg:w-[95%] max-w-7xl'>
        {data.map(item => (
          <WorkCard title={item.title} describe={item.describe} color={item.color} img={item.img}/>
        ))}
      </div>
      <h1 className='font-bold text-2xl pt-10'>Take a look at our beautiful work</h1>
      <button className='flex  items-center gap-2  mx-auto bg-orange-600 text-white rounded-full px-4 py-4 text-xl my-6'>View All Work<FaArrowRight/></button>
    </div>
  )
}



