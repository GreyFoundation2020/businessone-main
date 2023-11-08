import React, { useContext, useEffect } from 'react'
import { AppContextProvider } from '../../App';

export const ServiceCard = ({title, img, describe, color}) => {

  const {Aos} = useContext(AppContextProvider)

      useEffect(() => {
        Aos.init({
    
          duration: 1200,
          delay: 100
        }
        );
      }, [])
  return (
    <div data-aos="fade-up" className={`${color} drop-shadow-xl rounded-xl px-6 py-8 w-full h-full md:h-[550px] lg:h-96`}>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='py-4 text-gray-500'>{describe}</p>
        <div className='w-full lg:w-[90%] mx-auto'>{img}</div>
    </div>
  )
}
