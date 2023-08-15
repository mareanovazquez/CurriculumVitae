import perfil from '../../assets/img/perfil.jpg'
export const Header = () => {

  return (

    <>
      <div className='contenedorHeader'>
        <div className='contenedorImg'>
          <img className='imgPerfil' src={perfil} alt='perfil' />
        </div>
        <h4 className='text-center text-success' >Mariano Dario Vazquez</h4>
        <h6 className=''>Periodista </h6>
        <h6>Desarrollador Front-End</h6>
        <h6>Docente universitario</h6>
      </div>

    </>
  )
}