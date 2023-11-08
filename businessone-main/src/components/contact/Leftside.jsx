import React from 'react'
import { Form } from './Form'

export const Leftside = () => {
  return (
    <div className='leading-7 w-full'>
        <h1 className='text-orange-600 uppercase'>Inquiry</h1>
        <h1 className='py-4 text-3xl font-bold pb-20 lg:pb-0'>Let's get in touch</h1>
        <div className='py-10'>
            <div>
                <p>Mobile Number</p>
                <input type="text" name='phone' placeholder='+808828999288' className='w-full bg-white rounded-lg h-14 px-4 outline-none' />
            </div>
            <div className='py-6'>
                <p>Business Email</p>
                <input type="text" name='phone' placeholder='+808828999288' className='w-full bg-white rounded-lg h-14 px-4 outline-none' />
            </div>
            <div>
                <p>Zoom</p>
                <input type="text" name='phone' placeholder='+808828999288' className='w-full bg-white rounded-lg h-14 px-4 outline-none' />
            </div>
        </div>
        <div className='pb-20 pt-10'>
        <p className='text-gray-400'>Our Location</p>
        <iframe className='w-[100%] h-60 rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
