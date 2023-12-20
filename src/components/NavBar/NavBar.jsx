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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Smartphones">
                <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Oppo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Huawei</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Notebooks">
                <NavDropdown.Item href="#action/3.1">Apple</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Microsoft</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Infinix</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">HP</NavDropdown.Item>
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