import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signin({sign}) {
    
    const [user,setUser] = useState({username:"",password:""})
    
    const handleChange = (e) => {
    setUser({...user,[e.target.name] :e.target.value})
    }
    
    const navigate = useNavigate()

    const handleClick =()=>{
        if(user.username === "Jerniferharwell@gmail.com" && user.password === "jen54zh")
        {
            sign(true)
            navigate("/profile")
        }
        else{
            sign(false)
            navigate("/signin")
        }
    }

    return ( 
     <>
     <Navbar />
    <div class="main-wrapper">
        
        <section class="account-section bg_img" style={{backgroundImage: "url('/business1.jpeg')"}}>
            <div class="account-section-left">
                <div class="account-section-left-inner">
                    <h4 class="title text-white mb-2">Welcome to Capital Credit Bank</h4>
                    <p class="text-white">Please input your username and password and login into your account</p>
        
                  
                </div>
            </div>
            <div class="account-section-right">
               

                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="username" onChange={handleChange} style={{width:"50%",margin:"auto"}} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={handleChange} style={{width:"50%",margin:"auto"}} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <a href="https://ibanking.capitalcreditbank.cf/index.php/password/reset" class="custom--cl">
                                    Forgot password?
                                </a>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>{handleClick()}}>
        Submit
      </Button>
    </Form>

    
                
                
            </div>
        </section>
        <div class="account-section-left-inner" style={{color:"red"}}>
                   
        
                    <p class="mt-xl-5 mt-3 text-white" >Haven't an account? <Link to="/register" class="text--base">Signup here</Link></p>
                </div>

        
            </div>

            <Footer />
     </>

     );
}

export default Signin;