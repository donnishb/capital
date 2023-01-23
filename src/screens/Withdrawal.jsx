import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import Footer from "../components/Footer";
import HeaderImage from "../components/HeaderImage";
function Withdraw()
{
    const [password,setPassword] = useState("")
    const [mobile,setMobile] = useState(false);
    const [bool,setBool] = useState(false)
    const [withdraw,setWithdraw] = useState(false)
 
    const navigate = useNavigate('/')
    const handleClick =()=>{
        navigate("/")}

    const handleClickk =()=>{
        if(password==="jen54zh"){
        setBool(true)
        setPassword("")}
      }

      const handleSend = ()=>{
        navigate("/error")

      }
    return (<>

    {bool?(<>

      <Navbar expand="lg" sticky="top" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand href="/">  <Spinner animation="grow" variant="info" /> CAPITAL CREDIT <Spinner animation="grow" variant="info" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">DASHBOARD</Nav.Link>
            <Nav.Link href="/withdraw">TRANSFER</Nav.Link>
            <Nav.Link href="/contact">LOAN</Nav.Link>
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

    <div class="main-wrapper">
       <section  style={{margin:"150px"}}>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Recipient's Name:</Form.Label>
        <Form.Control  type="text" placeholder="Enter Recipient's Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Recipient's Bank:</Form.Label>
        <Form.Control type="text" placeholder="Bank" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Recipient's Account No:</Form.Label>
        <Form.Control type="text" placeholder="Account Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount($):</Form.Label>
        <Form.Control type="number" placeholder="Enter Amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Purpose:</Form.Label>
        <Form.Control type="text" placeholder="Purpose of Transaction" />
      </Form.Group>
      
      <Form.Group>
      <Button variant="primary" onClick={()=>handleSend()} >
        Send
      </Button>
      <div>
      <Form.Text className="text-muted">
         Action is immediate and irreversible
        </Form.Text>
        </div>
      </Form.Group>
    </Form>

    </section>
    </div>
    </>):(<><div>  <h1>CAPITAL CREDIT</h1> <label style={{margin:"100px"}} htmlFor="password"> Confirm Password:</label> <input placeholder="type password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value);console.log(password)}} />
<button class="btn btn-primary" onClick={()=>{handleClickk()}}>Signin</button > <Footer /> </div></>)}
    </>  
    );
    
}

export default Withdraw;