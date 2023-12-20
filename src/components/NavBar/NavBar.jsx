import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./NavBar.css"

import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategory } from '../../hooks/useProducts';


const NavBar = () => {

  const {category} = useGetCategory()

  return (
    <div>
      <Navbar expand="lg" className="fondo">
        <Container>
          <Link to="/"><h1><span className='title-one'>Gi</span><span className='title-two'>Tech</span></h1></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Category">
                {
                  category.map((categ, index) => {
                    return(
                      <NavDropdown.Item key={index}> <Link to={`/category/${categ}`}>{categ}</Link></NavDropdown.Item>
                    )
                  })
                }
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