import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {

    const [activeButton, setActiveButton] = useState(null)

    //Función para manejar la clase del botón seleccionado
    const toggleActive = (buttonId) => {
        setActiveButton(buttonId === activeButton ? null : buttonId);

    };

    return (
        <div className="MenuNavBar" >

            <NavLink className='opcionesNavBar' to='/'>
                <button className={`my-button ${activeButton === 1 ? 'btn btn-success' : 'btn btn-outline-success'}`}
                    onClick={() => toggleActive(1)} >
                    Sobre mi
                </button>
            </NavLink>

            <NavLink className='opcionesNavBar' to='/docencia'>
                <button className={`my-button ${activeButton === 2 ? 'btn btn-success' : 'btn btn-outline-success'}`}
                    onClick={() => toggleActive(2)}>
                    Docencia
                </button>
            </NavLink>

            <NavLink className='opcionesNavBar' to='/formacion'>
                <button className={`my-button ${activeButton === 3 ? 'btn btn-success' : 'btn btn-outline-success'}`}
                    onClick={() => toggleActive(3)} >
                    Formación
                </button >
            </NavLink>

            <NavLink className='opcionesNavBar' to='/experiencia'>
                <button className={`my-button ${activeButton === 4 ? 'btn btn-success' : 'btn btn-outline-success'}`}
                    onClick={() => toggleActive(4)} >
                    Experiencia
                </button>
            </NavLink>

            <NavLink className='opcionesNavBar' to='/habilidades'>
                <button className={`my-button ${activeButton === 5 ? 'btn btn-success' : 'btn btn-outline-success'}`}
                    onClick={() => toggleActive(5)} >
                    Habilidades
                </button>
            </NavLink>
        </div>
    );
}