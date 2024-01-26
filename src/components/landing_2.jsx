import ffservices from '../assets/ffservices.png'
export const Landing_2 = () => {
  return (
    <div className="ff__info">
      <div className="ff__info__tittle">
        <h1>¿Qué es Fondo Fortuna?</h1>
      </div>
      <div className='ff__info__content'>
        <div className="ff__info__image">
          <img src={ffservices} alt="" />
        </div>
        <div className="ff__info__text">
          <p>
            Fondo Fortuna es una plataforma de inversión que te permite
            invertir en la bolsa de valores de Estados Unidos, con un
            capital inicial de $100.000 COP.
          </p>
          <p>
            Nuestra plataforma te permite invertir en acciones de empresas
            como Apple, Amazon, Google, Tesla, entre otras.
          </p>
          <p>
            Además, te permite invertir en ETFs, que son fondos de inversión
            que agrupan acciones de diferentes empresas.
          </p>
        </div>
      </div>
    </div>
  )
}
