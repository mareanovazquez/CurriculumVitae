import perfil from '../../assets/img/perfil.jpg'
export const Header = () => {

  return (

    <>
      <div className='contenedorHeader'>
        
        <div className='contenedorImg'>
           <img className='imgPerfil' src={perfil} alt='perfil' />
        </div>

        <div className='contenedorNombre'>
          <h4 className='text-light' >Mariano Dario Vazquez</h4>
        </div>
        
        

      </div>

    </>
  )
}