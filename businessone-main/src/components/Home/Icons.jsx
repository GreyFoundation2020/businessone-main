import React, { useEffect, useState } from 'react'

export const Icons = ({title, describe, img, index}) => {
    const [stringImg, setStringImg] = useState('')
    useEffect(() => {
        if(typeof(img) == 'string'){
            setStringImg(img)
        }
    }, [])
    return (
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="100"
    data-aos-offset="0" className='flex space-x-2 gap-3 my-14'>
       <div className='w-20 h-16 bg-white rounded-full p-4'>
        {stringImg && <img className='w-full h-full object-contain' src={stringImg}/>}
        {!stringImg && img}
       </div> 
       <div className='text-left'>
        <h2 className='text-4xl font-bold'>{title}</h2> 
        <p className='text-gray-600 break-words'>{describe}</p> 
       </div>
    </div>
  )
}
