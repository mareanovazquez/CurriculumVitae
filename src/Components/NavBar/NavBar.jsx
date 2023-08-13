import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <Nav className="justify-content-end" >
            <Nav.Item>
                    <NavLink to='/'>
                        Sobre mi
                    </NavLink>
            </Nav.Item>
            <Nav.Item>
                    <NavLink to='/docencia'>
                        Formación
                    </NavLink>
            </Nav.Item>
            <Nav.Item>
                    <NavLink to='/formacion'>
                        Formación
                    </NavLink>
            </Nav.Item>
            <Nav.Item>
                    <NavLink to='/experiencia'>
                        Experiencia
                    </NavLink>
            </Nav.Item>
        </Nav>
    );
}