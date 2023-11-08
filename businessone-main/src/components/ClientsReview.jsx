import React, { useEffect, useState } from 'react'
import img1 from '../ReviewsImg/customer-logo-1.png'
import img2 from '../ReviewsImg/customer-logo-2.png'
import img4 from '../ReviewsImg/customer-logo-4.png'
import img5 from '../ReviewsImg/customer-logo-5.png'
import img6 from '../ReviewsImg/customer-logo-6.png'
import img7 from '../ReviewsImg/customer-logo-7.png'
import users from '../ReviewsImg/user4.jpg'

import { Carousel } from 'primereact/carousel';
import { Slider } from './Slider'
        
function ClientsReview() {
  const imgs = [
    img1, img2, img4, img5, img6, img7
  ]
const [active, setActive] = useState(0)
 
  return (
    <div id='section-5' className='bg-[#eee0f7] py-10'>
      <div className='px-6 md:w-[80%] mx-auto max-w-7xl lg:flex lg:w-[95%] lg:space-x-10'>
      <h1 className='font-bold leading-10 text-2xl pt-10 lg:text-4xl lg:w-[800px]'>We improve demand for efficiency and quality in entrepreneurship with creative mind.</h1>
      <div className='relative my-10 lg:my-0 mx-auto bg-white md:w-[95%] lg:w-[60%] h-full rounded-xl overflow-hidden'>
<Slider/>
</div>
      </div>
      <div className='hideit md:w-[80%] lg:w-[95%] max-w-7xl mx-auto py-14 flex items-center space-x-40 overflow-x-auto'>
      {imgs.map(img => (
        <img src={img}/>
        ))}
        </div>
    </div>
  )
}

export default ClientsReview