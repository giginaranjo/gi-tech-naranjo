// imports bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import component
import CartWidget from './CartWidget';

// import css
import "./NavBar.css"



const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="fondo">
        <Container>
          <Navbar.Brand href="#home"><h1><span className='title-one'>Gi</span><span className='title-two'>Tech</span></h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tablets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Ver todos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </div>

  );
}

export default NavBar