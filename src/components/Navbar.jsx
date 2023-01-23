import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function Navbarr() {
    const navigate = useNavigate();
    const handleSignin = ()=>{
        navigate('/signin')
    }
    const handleSignup = ()=>{
        navigate('/register')
    }
    
    return (<>

    <Navbar expand="lg" sticky="top" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand href="/">  <Spinner animation="grow" variant="info" /> CAPITAL CREDIT <Spinner animation="grow" variant="info" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>

          <Nav className="d-flex">
          <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              
            </NavDropdown>
            <Button style={{color:"white"}} variant="outline-dark" onClick={handleSignin}>SignIn</Button>
            <Button style={{color:"white"}} variant="outline-dark" onClick={handleSignup}>SignUp</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>  
    
    );
}

export default Navbarr;


