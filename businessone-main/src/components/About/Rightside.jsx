import React from 'react'
import {SlSocialInstagram, SlSocialTwitter, SlSocialLinkedin, SlSocialFacebook, SlSocialYoutube} from 'react-icons/sl'
export const Rightside = () => {
  return (
    <div className='pt-8 leading-7 lg:w-1/2'>
        <h1 className='text-orange-600 uppercase'>Our Mission</h1>
        <h1 className='py-4 text-3xl font-bold'>Get To Know More About US Here</h1>
        <p className='py-2 text-gray-500'>Welcome to Wingency, where web dreams become reality! We are a passionate team of web designers, developers, and digital strategists dedicated to helping businesses and individuals thrive in the digital world.</p>
        <p className='text-gray-500'>At Wingency, our mission is simple yet profound: to create exceptional digital experiences that leave a lasting impact. We believe that your website is your digital storefront, and it should not only be visually captivating but also function seamlessly, ensuring your online success.</p>
        <div className='pt-6'>
            <h1 className='font-bold text-xl'>Follow Me on Social Media</h1>
            <div className='flex text-orange-600 pt-4 items-center space-x-4 text-2xl '>
                <SlSocialFacebook/>
                <SlSocialInstagram/>
                <SlSocialLinkedin/>
                <SlSocialYoutube/>
            </div>
        </div>
    </div>
  )
}
