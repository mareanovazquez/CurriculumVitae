import Nav from 'react-bootstrap/Nav';

export const Footer = ()=> {

    return(
        <>
        <p>Contacto y redes sociales</p>
        <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Mail</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Teléfono</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='https://github.com/mareanovazquez' target='_blanck' >
          GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </>
    )
}