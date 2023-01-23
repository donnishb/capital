import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';
import Footer from "../components/Footer";
import Card from 'react-bootstrap/Card';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';


function Profile(sw) {
    const [mobile,setMobile] = useState(false);
    const [withdraw,setWithdraw] = useState(false) 
    const [transactions, setTransactions] = useState([
        { id: 1, date: '01/01/2022', amount: 100, type: 'Withdraw' },
        { id: 2, date: '01/02/2022', amount: 50, type: 'Deposit' },
        { id: 3, date: '01/03/2022', amount: 75, type: 'Withdraw' },
        { id: 4, date: '01/04/2022', amount: 200, type: 'Deposit' },
    ]);
    const navigate = useNavigate('/')
    const handleClick =()=>{
        navigate("/")
    }
    return ( 
        <>
        <div>
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


    
      <div class="main-wrapper" >

<section class="inner-hero bg_img overlay--one" >

<div class="container" >
<div class="row justify-content-center">
<div class="col-lg-6 text-center">
<h2 class="page-title text-white">Dashboard</h2>

</div>
</div>
</div>
</section>


<section class="pt-100 pb-100 bg_img" style={{backgroundImage: "url('https://ibanking.capitalcreditbank.cf/assets/images/frontend/breadcumb/60c7569dec4f01623676573.jpg')"}}>

<div class="container" >

<div style={{display:"flex",justifyContent:"space-around"}} >






<div >
<Card
          bg='info'
          text='white'
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header><Card.Title> Account Number </Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
            CCB230414373360
            </Card.Text>
          </Card.Body>
</Card>
</div>


<div class="card-widget section--bg2 text-center bg_img" >
<Card
          bg='info'
          text='white'
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header><Card.Title> Available Balance </Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
            $346,201.00
            </Card.Text>
          </Card.Body>
        </Card>
    
</div>


</div>

<div class="row justify-content-center gy-4 mt-4" style={{backgroundColor: "#22178bff"}}>
        <div class="col-lg-4 col-md-6">

    <div class="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100" >
        <div class="d-widget__content" style={{ width: '50%', margin:"auto"}}>
        <Card border="info" >
        <Card.Header><Card.Title>  Deposits
          <div><i class="bi bi-briefcase"></i></div></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
          $392,000.00
          </Card.Text>
        </Card.Body>
      </Card>
       
        </div>
    </div>

</div>

        <div class="col-lg-4 col-md-6">

    <div class="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100" >
        <div class="d-widget__content" style={{ width: '50%', margin:"auto"}}>
        <Card border="info" >
        <Card.Header><Card.Title>   Withdrawals
        <div><i class="bi bi-bank"></i></div></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
          $45,799.00
          </Card.Text>
        </Card.Body>
      </Card>

        </div>
        
    </div>

</div>
<div>

</div>
<div class="col-lg-4 col-md-6">

    <div class="d-widget section--bg2 d-flex flex-wrap align-items-center rounded-3 bg_img h-100" >
        <div class="d-widget__content" style={{ width: '50%', margin:"auto"}}>


        
        <Card border="info" >
        <Card.Header><Card.Title>    Transactions
       <div> <i class="bi bi-coin -fill"></i></div></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
        
          13
          </Card.Text>
        </Card.Body>
      </Card>

        </div>
    </div>

</div>

    </div>
<div />

<div class="row gy-4 mt-5">
<div class="col-lg-6">
<h4 class="mb-3">Latest Credits</h4>
<div class="custom--card">
    <div class="card-body p-0">
        <div class="table-responsive--md">
            <table class="table custom--table mb-0">
                <thead>
                    <tr> 
                        <th>Date</th>
                        <th>Trx</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                                                            <tr>
                            <td ><th>Date</th>26 Nov, 2022 01:48PM</td>
                            <td><th>Trx</th>TUPBTV58FDSH</td>
                            <td><th>Amount</th>50,000.00 USD</td>
                        </tr>

                        <tr>
                            <td ><th>Date</th>02 Aug, 2022 02:08PM</td>
                            <td><th>Trx</th>BXPBTY58CSW</td>
                            <td><th>Amount</th>80,000.00 USD</td>
                        </tr>

                        <tr>
                            <td ><th>Date</th>09 Jul, 2022 11:01AM</td>
                            <td><th>Trx</th>AHUPB58FDZH</td>
                            <td><th>Amount</th>40,000.00 USD</td>
                        </tr>

                        <tr>
                            <td ><th>Date</th>13 Jun, 2022 1:32PM</td>
                            <td><th>Trx</th>LSUPR25FDZJ</td>
                            <td><th>Amount</th>48,000.00 USD</td>
                        </tr>

                        <tr>
                            <td ><th>Date</th>21 May, 2022 02:48PM</td>
                            <td><th>Trx</th>FDUB58FD0P</td>
                            <td><th>Amount</th>60,000.00 USD</td>
                        </tr>

                        <tr>
                            <td ><th>Date</th>16 Mar, 2022 9:47PM</td>
                            <td><th>Trx</th>YGUV93FDTG</td>
                            <td><th>Amount</th>20,000.00 USD</td>
                        </tr>
                        <tr>
                            <td ><th>Date</th>22 Feb, 2022 01:07PM</td>
                            <td><th>Trx</th>GDUPB14FDZT</td>
                            <td><th>Amount</th>75,000.00 USD</td>
                        </tr>
                        <tr>
                            <td ><th>Date</th>11 Jan, 2022 02:12PM</td>
                            <td><th>Trx</th>JHUTC3FDPW</td>
                            <td><th>Amount</th>19,000.00 USD</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>

<div class="col-lg-6">
<h4 class="mb-3">Latest Debits</h4>
<div class="custom--card">
    <div class="card-body p-0">
        <div class="table-responsive--md">
            <table class="table custom--table mb-0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Trx</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                                                            <tr>
                            <td><th>Date</th>2 Oct, 2022 01:37PM</td> <td><th>Trx</th>DSK78D676</td> <td><th>Amount</th>10,000.00 USD</td>
                        </tr>

                        <tr>
                            <td><th>Date</th>11 Aug, 2022 03:23PM</td> <td><th>Trx</th>FD80B634</td> <td><th>Amount</th>5,000.00 USD</td>
                        </tr>
                         
                        <tr>
                            <td><th>Date</th>08 Aug, 2022 02:20PM</td> <td><th>Trx</th>VC8MB676</td> <td><th>Amount</th>8,000.00 USD</td>
                        </tr>

                        <tr>
                            <td><th>Date</th>02 Jun, 2022 0:12PM</td> <td><th>Trx</th>BH8CB676</td> <td><th>Amount</th>12,000.00 USD</td>
                        </tr>
                        <tr>
                            <td ><th>Date</th>14 Mar, 2022 03:07PM</td> <td ><th>Trx</th>CGH0B676</td> <td><th>Amount</th>10,750.00 USD</td>
                            </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>




{withdraw?(<div>
    <label for="amount"> Amount</label><input name="amount"/>
</div>):""}
</div>
</div>


</section>

</div>

        </div>


         


        <Footer/>
        </>
     );
}

export default Profile;