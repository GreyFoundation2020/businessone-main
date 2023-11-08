import React, { useContext, useEffect } from 'react'
import img1 from '../../PartnerImg/brand-logo-2.png'
import img2 from '../../PartnerImg/brand-logo-3.png'
import img3 from '../../PartnerImg/brand-logo-4.png'
import img4 from '../../PartnerImg/brand-logo-5.png'
import img5 from '../../PartnerImg/brand-logo-6.png'
import img6 from '../../PartnerImg/brand-logo-7.png'
import img7 from '../../PartnerImg/brand-logo-8.png'
import img8 from '../../PartnerImg/brand-logo-9.png'
import img9 from '../../PartnerImg/brand-logo-10.png'
import img10 from '../../PartnerImg/brand-logo-11.png'
import img11 from '../../PartnerImg/brand-logo-12.png'
import { AppContextProvider } from '../../App'


export const Partner = () => {
    const imgs = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
      ]

      const {Aos} = useContext(AppContextProvider)

      useEffect(() => {
        Aos.init({
    
          duration: 1200,
          delay: 100
        }
        );
      }, [])
      return (
        <div id='section-4' className=' py-10 text-center'>
          <div className='px-6'>
          <h1 className='font-bold leading-10 text-4xl py-5 md:text-5xl md:w-[80%] mx-auto'>We Are Partnering With Top Ventures</h1>
          <p className='text-gray-600 max-w-7xl md:w-[80%] mx-auto'>We deeply appreciate the valuable partnerships that have been instrumental in our journey. These collaborations have allowed us to combine strengths, broaden our horizons, and achieve success together. We value the trust and support of our partners, and we look forward to continuing our fruitful relationships in the future. Thank you for being an integral part of our success story.</p>
          <div className=' pt-20 py-14 grid grid-cols-3 lg:grid-cols-4 gap-10 items-center overflow-x-auto max-w-7xl md:w-[80%] lg:w-[95%] mx-auto'>
          {imgs.map(img => (
            <img data-aos="fade-right" className='w-32 mx-auto' src={img}/>
            ))}
            </div>
          </div>
        </div>
      )
}
