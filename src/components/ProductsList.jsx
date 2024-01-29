import React from 'react'

export const ProductsList = () => {
  return (
    <div className='products__list'>
        <div className='products__list__item'>
          <div className='products__list__item__image'>
            <img src="https://via.placeholder.com/200x200" alt="" />
          </div>
          <div className='products__list__item__info'>
            <h3>Nombre del producto</h3>
            <p>Descripción del producto</p>
            <p>$ 0.00</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
  )
}
