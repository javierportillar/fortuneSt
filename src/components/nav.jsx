import {useState} from 'react'
import navIcon from '../assets/navIcon.svg'
import ffimg from '../assets/ffimg.png'


export const Nav = (props) => {
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
    <NavActive isActive={isActive}></NavActive>
    </div>
  )
}
