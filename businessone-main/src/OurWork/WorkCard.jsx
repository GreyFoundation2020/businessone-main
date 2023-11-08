import React from 'react'

export const WorkCard = ({title, img, color}) => {
  return (
    <div>
    <div className={` rounded-xl w-full h-[400px] md:h-[250px] ${color}`}>
        <img className='rounded-xl w-full h-[95%] p-4 flex mx-auto hover:scale-105 transition-all duration-500 ease-linear object-contain' src={img} alt="" />
    </div>
        <h1 className='pt-4 font-bold text-xl'>{title}</h1>
        <p className='pt-1 text-gray-400 p-0'>UX/UI Graphic Design</p>
    </div>
  )
}
