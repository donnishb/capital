import Footer from "components/Footer";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
function Details() {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate("/")
    }
    return (
    <>

<Navbar expand="lg" sticky="top" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand href="/">  <Spinner animation="grow" variant="info" /> CAPITAL CREDIT <Spinner animation="grow" variant="info" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">DASHBOARD</Nav.Link>
            <Nav.Link href="/withdraw">TRANSFER</Nav.Link>
            <Nav.Link >LOAN</Nav.Link>
            <Nav.Link href="/details">MORE</Nav.Link>
            
          </Nav>

          <Nav className="d-flex">
          <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
              
            </NavDropdown>
            <button style={{backgroundColor:"blueblack", border: "2px solid  red"}} onClick={()=>handleClick()}> Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                
    <Card 
          bg='info'
          text='white'
          style={{ width: '100%' }}
          className="mb-2"
        >
          <Card.Header> 
          <Card.Title variant="tabs" >
           <div style={{ display:"flex",justifyContent:"space-between"}}><div  >My Account </div>
           <div > <i style={{fontSize: "28px"}} class="bi bi-person"></i></div> </div>
          
          </Card.Title>
          </Card.Header>
          <Card.Body style={{ backgroundColor:"cadetblue" }}>
          <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Name</th>
          <td>Jennifer Harwell</td>
          
        </tr>
      </thead>
      <tbody>
        <tr>

          <th>Email</th>
          <td>Jerniferharwell@gmail.com</td>
          
        </tr>
        <tr>
          
          <th>Country</th>
          <td>USA</td>
     
        </tr>

        <tr>
          
          <th>Contact</th>
          <td>(397)649-0906</td>
     
        </tr>

        <tr>
          <th>City</th>
          <td>Seattle</td>
        </tr>

        <tr>
          <th>Zip Code</th>
          <td>98131</td>
        </tr>

        
        <tr>
          <th>Address</th>
          <td>9454 17TH AVE SW SEATTLE WA 98106-5254</td>
        </tr>
        
        <tr>
          
          <td colSpan={2}>Larry the Bird</td>
         
        </tr>
      </tbody>
    </Table>
          </Card.Body>
</Card>
                
                


        

        <Footer />
    </>  );
}

export default Details;