import React from 'react'
import { ReactComponent as Img1 } from '../../ServicesImg/app.svg'
import { ReactComponent as Img2 } from '../../ServicesImg/web.svg'
import { ReactComponent as Img3 } from '../../ServicesImg/design.svg'
import { ReactComponent as Img4 } from '../../ServicesImg/marketing.svg'
import { ServiceCard } from './ServiceCard'


export const Services = () => {
  const data = [
    {
      img: <Img1/>,
      title: "App Development",
      describe: "We don't just build websites, we build apps from andriod to ios.",
      color: 'bg-[#fff2e2]'
    },
    {
      img: <Img2/>,
      title: "Web Design",
      describe: "We have the best designers in the industry to create eye catching website.",
      color: 'bg-[#ffe0e0]'
    },
    {
      img: <Img3/>,
      title: "UI/UX Design",
      describe: "We build websites that best fits your need and we have the experts. Fully responsive.",
      color: 'bg-[#c8ebff]'
    },
    {
      img: <Img4/>,
      title: "Digital Marketing",
      describe: "Marketing is hard? Don't worry we have a team that specialize in that. ",
      color: 'bg-[#eee0f7]'
    },
  ]
  return (
    <div className='text-center py-10 px-4'>
      <h1 className='text-3xl font-bold py-5 '>Awesome Services</h1>
      <p className='text-gray-500 max-w-7xl md:w-[80%] mx-auto'>We are your all-in-one solution for digital success. Our expert team specializes in website and app development, UX/UI design, and digital marketing. With our diverse skill set, we ensure your digital presence not only meets your expectations but also thrives in the way you envision.</p>
      <div className='py-10 text-start flex flex-col gap-6 md:grid md:grid-cols-2 md:w-[80%] lg:w-[95%]  mx-auto max-w-7xl lg:grid-cols-4'>
        {data.map(item => (
          <ServiceCard title={item.title} describe={item.describe} color={item.color} img={item.img}/>
        ))}
      </div>
      <h1 className='font-bold text-2xl pt-10'>Connect with us on Google Meet</h1>
      <button className='bg-green-400 text-white rounded-full px-4 py-4 text-xl my-6'>+1213999 929 23223</button>
    </div>
  )
}
