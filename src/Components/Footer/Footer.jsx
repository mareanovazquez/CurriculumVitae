import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';




export const Footer = () => {

  const [tituloActual, setTituloActual] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Si el título actual es el tercer título, volvemos al primero. 
      // De lo contrario, avanzamos al siguiente título.
      setTituloActual(tituloActual < 3 ? tituloActual + 1 : 1);
    }, 6000); // 5 segundos

    // Limpiamos el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [tituloActual]);

  const pdfFileURL = '../../../CV.pdf'; // Reemplaza con la ruta correcta al archivo PDF

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfFileURL;
    link.download = 'curriculum.pdf'; // Cambia el nombre de archivo según lo desees
    link.click();
  };


  return (
    <>
      <div className='contenedorFooter'>
        <div className='contenedorNombreAlt'><h3>Mariano Dario Vazquez</h3></div>
        <div className='contenedorDescripcion'>
          {tituloActual === 1 && <h4>Lic. en comunicación</h4>}
          {tituloActual === 2 && <h4>Docente universitario</h4>}
          {tituloActual === 3 && <h4 className='desarrolladorFE'>Desarrollador frontend</h4>}
        </div>

        <Nav variant="underline" defaultActiveKey="/home" className=' contenedorContacto justify-content-center'>
          <Nav.Item>
            <Nav.Link href="mailto:mariano@estudiorec.com.ar"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.linkedin.com/in/mareanovazquez/' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
            </svg></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://github.com/mareanovazquez' target='_blank' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github " viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://mareanovazquez.wordpress.com/' target='_blanck' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wordpress" viewBox="0 0 16 16">
                <path d="M12.633 7.653c0-.848-.305-1.435-.566-1.892l-.08-.13c-.317-.51-.594-.958-.594-1.48 0-.63.478-1.218 1.152-1.218.02 0 .039.002.058.003l.031.003A6.838 6.838 0 0 0 8 1.137 6.855 6.855 0 0 0 2.266 4.23c.16.005.313.009.442.009.717 0 1.828-.087 1.828-.087.37-.022.414.521.044.565 0 0-.371.044-.785.065l2.5 7.434 1.5-4.506-1.07-2.929c-.369-.022-.719-.065-.719-.065-.37-.022-.326-.588.043-.566 0 0 1.134.087 1.808.087.718 0 1.83-.087 1.83-.087.37-.022.413.522.043.566 0 0-.372.043-.785.065l2.48 7.377.684-2.287.054-.173c.27-.86.469-1.495.469-2.046zM1.137 8a6.864 6.864 0 0 0 3.868 6.176L1.73 5.206A6.837 6.837 0 0 0 1.137 8z" />
                <path d="M6.061 14.583 8.121 8.6l2.109 5.78c.014.033.03.064.049.094a6.854 6.854 0 0 1-4.218.109zm7.96-9.876c.03.219.047.453.047.706 0 .696-.13 1.479-.522 2.458l-2.096 6.06a6.86 6.86 0 0 0 2.572-9.224z" />
                <path fillRule="evenodd" d="M0 8c0-4.411 3.589-8 8-8 4.41 0 8 3.589 8 8s-3.59 8-8 8c-4.411 0-8-3.589-8-8zm.367 0c0 4.209 3.424 7.633 7.633 7.633 4.208 0 7.632-3.424 7.632-7.633C15.632 3.79 12.208.367 8 .367 3.79.367.367 3.79.367 8z" />
              </svg>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className='contenedorDescargaCV'>
          <button className='btn btn-sm btn-outline-secondary descargaCV' onClick={handleDownloadPDF}>  DESCARGA CV</button>

        </div>
      </div>
    </>
  )
}