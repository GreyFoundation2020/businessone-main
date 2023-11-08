import React, { useContext, useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiMinutemailer} from 'react-icons/si'
import {FaArrowUp} from 'react-icons/fa'
import { AppContextProvider } from '../App'
import { Menu } from '../Menu'
import ScrollToTop from "react-scroll-to-top";
export const Navbar = () => {
  const {setShowSideBar, scrolled, setScrolled, goToTop, handleClickScroll} = useContext(AppContextProvider)

  const hanleHide = () => {
    document.body.classList.add('hideIt')
    setShowSideBar(true)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setScrolled(true)
        console.log('true')
      } else{
        setScrolled(false)
        console.log('false')
      }
    })
  }, [])

  return (
    <>
    <div className='relative'>
    <div className={scrolled && 'backdrop-blur-2xl bg-white/60 fixed top-0 h-20 z-[1000]  transition-all duration-400 delay-300  ease-linear w-full'}>
    </div>
      <div className='fixed top-0 left-0 z-[1000] flex text-4xl justify-between items-center w-full h-10 pt-10 px-4'>
        <img className='cursor-pointer w-60 xl:w-80' onClick={goToTop} src='/mine.png'/>
        <div className='hidden text-2xl lg:flex space-x-6'>
        <Menu/>
        </div>
        <button onClick={() => handleClickScroll(2)} className='hidden lg:block bg-white border-orange-600 border-2 rounded-full px-4 py-3 text-orange-600 text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 ease-linear'>Request Quote</button>
        <div className='flex space-x-4 items-center lg:hidden'>
        <SiMinutemailer onClick={() => handleClickScroll(2)} className='bg-orange-600 text-5xl text-white p-3 rounded-xl hover:text-orange-600 transition-all duration-300 ease-linear hover:border hover:border-orange-600 hover:bg-white'/>
        <GiHamburgerMenu onClick={() => hanleHide()}/>
        </div>
      </div>
    </div>
    </>
  )
}
