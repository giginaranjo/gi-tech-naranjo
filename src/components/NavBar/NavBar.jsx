import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./NavBar.css"

import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useGetCategory } from '../../hooks/useProducts';


const NavBar = () => {
  
  const { category } = useGetCategory()


  return (
    <div>
      <Navbar expand="lg" className="fondo">
        <Container>
          <Link className="title" to="/"><h1><span className='title-one'>Gi</span><span className='title-two'>Tech</span></h1></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Link className='options-nav' to="/">Home</Link>
              
              <NavDropdown title="Category" >
                {
                  category.map((categ) => categ.category.map((category, index) => (
                    <NavDropdown.Item key={index}> <Link to={`/category/${category}`} style={{ textDecoration: "none", color: "white" }}> {category} </Link> </NavDropdown.Item>
                  )))
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