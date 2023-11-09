import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export function NavBar() {

    const [activeButton, setActiveButton] = useState(null)

    //Función para manejar la clase del botón seleccionado
    const toggleActive = (buttonId) => {
        setActiveButton(buttonId === activeButton ? null : buttonId);

    };

    const pdfFileURL = '../../../CV.pdf'; // Reemplaza con la ruta correcta al archivo PDF

    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = pdfFileURL;
        link.download = 'curriculum.pdf'; // Cambia el nombre de archivo según lo desees
        link.click();
    };

    return (
        <div className="MenuNavBar" >

            <NavLink className='opcionesNavBar' to='/sobremi'>
                <button className={`my-button ${activeButton === 1 ? 'btn btn-secondary' : 'btn btn-outline-secondary'}`}
                    onClick={() => toggleActive(1)}>
                    <FontAwesomeIcon icon={faGlasses} />
                    <br></br>
                    <small>SOBRE MI</small>
                </button>
            </NavLink>

            <NavLink className='opcionesNavBar' to='/formacion'>
                <button className={`my-button ${activeButton === 2 ? 'btn btn-secondary' : 'btn btn-outline-secondary'}`}
                    onClick={() => toggleActive(2)} >
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <br></br>
                    <small> ESTUDIOS</small>
                </button >
            </NavLink>

            <NavLink className='opcionesNavBar' to='/docencia'>
                <button className={`my-button ${activeButton === 3 ? 'btn btn-secondary' : 'btn btn-outline-secondary'}`}
                    onClick={() => toggleActive(3)}>
                    <FontAwesomeIcon icon={faChalkboardUser} />
                    <br></br>
                    <small>DOCENCIA</small>
                </button>
            </NavLink>

            <NavLink className='opcionesNavBar' to='/experiencia'>
                <button className={`my-button ${activeButton === 4 ? 'btn btn-secondary' : 'btn btn-outline-secondary'}`}
                    onClick={() => toggleActive(4)} >
                    <FontAwesomeIcon icon={faLaptop} />
                    <br></br>
                    <small>EXPERIENCIA</small>
                </button>
            </NavLink>

            <NavLink className='opcionesNavBar' to='/habilidades'>
                <button className={`my-button ${activeButton === 5 ? 'btn btn-secondary' : 'btn btn-outline-secondary'}`}
                    onClick={() => toggleActive(5)} >
                    <FontAwesomeIcon icon={faScrewdriverWrench} /> <br></br> <small>HABILIDADES</small>
                </button>
            </NavLink>

            <NavLink><button className='btn btn-outline-secondary btn-descargaCV'
                onClick={handleDownloadPDF} >
                <FontAwesomeIcon icon={faFileArrowDown} />
            </button>
            </NavLink>
        </div>
    );
}