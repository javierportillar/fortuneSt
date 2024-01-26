import {useState} from 'react'
import ffimg from '../assets/ffimg.png'
import navIcon from '../assets/navIcon.svg'

export const NavElements = (props) => {
  const {isActive, setActive} = props;
  const toggleMenu = () => {
    console.log('click');
    setActive(!isActive);
  };
  
  return (
    <div>
    <div className='navBar'>
      <div className='navBar__logo' onClick={toggleMenu}>
        <img src= {navIcon} alt='logo' />
      </div>
      <div className='navBar__links'>
        <img src={ffimg} alt="" />
        <a href='#'>Contact</a>
      </div>
    </div>
    
    </div>
  )
}
