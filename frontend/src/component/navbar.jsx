import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function BasicNavbar() {
  const navigate = useNavigate();
 
  const Logout = async () => {
      try {
          await axios.delete('http://localhost:5000/logout');
          navigate("/");
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <Navbar expand="lg" className="bg-body-secondary" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Recipe.Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Recipe</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <Nav.Link onClick={Logout}><box-icon name='power-off'></box-icon></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;