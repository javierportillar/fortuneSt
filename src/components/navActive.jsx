import React from 'react'
import close from '../assets/close.svg'

export const NavActive = () => {
  return (
    <div className='nav inactive'>
      <div className='nav__close'>
        <img src={close} alt="" />
      </div>
      <div className='nav__List'>
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
