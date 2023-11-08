import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import users from '../ReviewsImg/user4.jpg'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
export const Slider = ({product}) => {
    const [products, setProducts] = useState([
        {
        id: 0,
        name: 'Quantum AImes',
        company: 'Executive, Quantum AI',
        image: 'https://images.pexels.com/photos/18277222/pexels-photo-18277222/free-photo-of-cinematic-view.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        describe: 'This team is unique — they are all engaged, authentic, and talented.'

      },
        {
          id: 1,
          name: 'Brand Vision',
        company: 'Marketing Coordinator, Brokerage Firm',
        image: 'https://images.pexels.com/photos/8955380/pexels-photo-8955380.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        describe: 'I am very satisfied with their taste and style of design and communication.'


      },
        {
          id: 2,
         name: 'Ben',
        company: 'Marketing Director, Furniture Manufacturer',
        image: 'https://images.pexels.com/photos/18608193/pexels-photo-18608193/free-photo-of-teide-nationalpark-teneriffa.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        describe: 'Their experience speaks volumes and drives our digital growth.'

      }
    ]);
  return (
    <Splide
    options={ {
      rewind: true,
      gap   : '1rem',
      autoplay: true,
      arrows: false,
    } }
    aria-label="My Favorite Images"
  >
    {products.map(product => (
    <SplideSlide>
      <div className='text-gray-500'>
      <div className=''>
        <p className='flex'><span className='text-xl font-bold pr-2 text-orange-600'><ImQuotesLeft/></span>{product.describe}.<span className='text-xl font-bold pl-2 text-orange-600'><ImQuotesRight/></span></p>
    </div>
      <div className='flex items-center space-x-4 my-8'>

      <img className='w-20 h-20 object-cover rounded-full' src={product.image} alt="Image1"/>
      <div>
      <h1>{product.name}</h1>
      <p>{product.company}</p>
      </div>
      </div>
      </div>
    </SplideSlide>
        ))}
  </Splide>
   );
  }
  

