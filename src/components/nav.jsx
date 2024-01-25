import React from 'react'
import navIcon from '../assets/navIcon.svg'
import ffimg from '../assets/ffimg.png'
import { NavActive } from './navActive'


export const Nav = () => {
  return (
    <div>
    <div className='navBar'>
      <div className='navBar__logo'>
        <img src= {navIcon} alt='logo' />
      </div>
      <div className='navBar__links'>
        <img src={ffimg} alt="" />
        <a href='#'>Contact</a>
      </div>
    </div>
    <NavActive></NavActive>
    </div>
  )
}
