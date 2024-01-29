import close from '../assets/close.svg'

export const NavMenu = (props) => {
  const {isActive, setActive} = props;
  const toggleMenu = () => {
    setActive(!isActive);
  };
  return (
    <div className={`nav ${isActive?'active':'inactive'}`}>
      <div className='nav__close' onClick={toggleMenu}>
        <img src={close} alt="" />
      </div>
      <div className='nav__list'>
        <h2>Menú</h2>
        <ul> 
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href="/products">Productos</a>
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
