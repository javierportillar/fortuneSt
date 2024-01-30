import datos from '../../public/datos'
const productos = datos;

export const ProductsList = () => {
  return (
    <div className='products__list'>
      {productos.map((producto) => {
        const { id, name, description, price, img } = producto;
        return (
          <div className='products__list__item' key={id}>
            <div className='products__list__item__image'>
              <img src={img} alt="" />
            </div>
            <div className='products__list__item__info'>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>${price}</p>
              <button>Agregar al carrito</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}