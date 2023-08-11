import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div>Formación</div>
                <div>Experiencia</div>
                <div>Docencia</div>
                <div>Habilidades</div>
                
            </div>
        </div>
    );
}