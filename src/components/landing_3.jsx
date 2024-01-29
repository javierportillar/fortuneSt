import { ProductButton } from './buttonProducts'

export const Landing_3 = () => {
  return (
    <div className='ff__services-products'>
      <div className='ff__services-products__tittle'>
        <h1>¿Qué servicios y productos ofrece Fondo Fortuna?</h1>
      </div>
      <div className='ff__services-products__text'>
        <h2>En los siguientes botones encontraras información de ello ;)</h2>
      </div>
      <div className='ff__services-products__buttons'>
        <button><a href="/products" className='btn-slide-c'>PRODUCTOS</a></button>
        <button> <a href="/services" className='btn-slide-c'>SERVICIOS</a></button>
      </div>
    </div>
  )
}
