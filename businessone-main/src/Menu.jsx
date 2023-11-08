import React, { useContext } from 'react'
import { AppContextProvider } from './App'

export const Menu = ({click}) => {
  const {handleClickScroll, setShowSideBar} = useContext(AppContextProvider)
  const hanleClickSideBar = () => {
    document.body.classList.remove('hideIt')
    setShowSideBar(false)
  }
  return (
    <>
        <a onClick={() => {
           hanleClickSideBar()
          handleClickScroll(1)}} className='uppercase text-xl cursor-pointer'>About Us</a>
        <a onClick={() => {
           hanleClickSideBar()
          handleClickScroll(2)}} className='uppercase text-xl cursor-pointer'>Contact Us</a>
        <a onClick={() => {
           hanleClickSideBar()
          handleClickScroll(3)}} className='uppercase text-xl cursor-pointer'>Our Work</a>
        <a onClick={() => {
          hanleClickSideBar()
          handleClickScroll(4)}} className='uppercase text-xl cursor-pointer'>Client</a>
        <a onClick={() => {
           hanleClickSideBar()
          handleClickScroll(5)}} className='uppercase text-xl cursor-pointer'>Reviews</a>
    </>
  )
}
