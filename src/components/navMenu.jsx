import React from 'react'
import close from '../assets/close.svg'

export const NavActive = (props) => {
  const {isActive, setActive} = props;
  const toggleMenu = () => {
    console.log('click');
    setActive(!isActive);
  };
  return (
    <div className={`nav ${isActive?'active':'inactive'}`}>
      <div className='nav__close' onClick={toggleMenu}>
        <img src={close} alt="" />
      </div>
      <div className='nav__list'>
        <ul> 
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href="/producs">Productos</a>
          </li>
          <li>
            <a href="/about">Acerca nosotros</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
