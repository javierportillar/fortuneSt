import { ServicesList } from "./ServicesList"

export const ServicesPage = () => {
  return (
    <div className='services'>
      <div className='services__tittle'>
        <h2> A continuación se encuentran los servicios que Fondo Fortuna ofrece hasta el momento... </h2>
      </div>
      <div className='services__bg'>
        <ServicesList></ServicesList>
      </div>
    </div>
  )
}
