import {useState} from 'react'
import ffimg from '../assets/ffimg.png'
import navIcon from '../assets/navIcon.svg'

export const NavElements = (props) => {
  const {isActive, setActive} = props;
  
  const toggleMenu = () => {
    setActive(!isActive);
  };
  
  return (
    <div>
    <div className='navBar'>
      <div className='navBar__logo' onClick={toggleMenu}>
        <img src= {navIcon} alt='logo' />
      </div>
      <div className='navBar__links'>
        <a href="/"><img src={ffimg} alt="" /></a>
        <a href='#'>Contact</a>
      </div>
    </div>
    
    </div>
  )
}
