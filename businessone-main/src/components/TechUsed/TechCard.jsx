import React from 'react'

export const TechCard = ({title, img, color}) => {
  return (
    <div className={`${color} bg-gray-100 flex flex-col items-center justify-center w-full h-40 p-4 rounded-lg md:w-40`}>
        <p className='text-5xl font-bold'>{img}</p>
        <p className='pt-6'>{title}</p>
    </div>
  )
}
