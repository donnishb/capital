import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Whyus() {
    return ( <section class="pt-100 pb-50 bg_img dark--overlay-two" style={{backgroundColor:"#22178bff"}}>
    
    <div class="container">
      <div class="row gy-4">
        
        <div >
          <div class="row gy-4">
          <Card style={{ width: '50%', margin:"auto",backgroundColor:"black",color:"white"}}>
      <Card.Body>
      <i class="bi bi-bookmark-check" style={{fontSize: "30px"}}></i>
        <Card.Title><h3 class="title">Why Choose Us?</h3></Card.Title>
        <Card.Text>
        We are giving you the best services
        </Card.Text>
        <Button variant="primary">Get Started</Button>
      </Card.Body>
    </Card>

<div style={{ display:"flex"}}>
          <Card style={{ margin:"1.5rem"}}>
      <Card.Body>
      <i class="bi bi-file-earmark-lock" style={{fontSize: "30px"}} ></i>
        <Card.Title><h3 class="title">Secure Service</h3></Card.Title>
        <Card.Text>
        Every balance subtracting transactions need OTP verification so You can feel safe about your funds. Also, you can use the google authenticator app on your cellphone and enable 2FA security from the account menu.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{  margin:"1.5rem" }}>
      
      <Card.Body>
      <i class="bi bi-arrow-down-short" style={{fontSize: "30px"}}></i>  
        <Card.Title><h3 class="title">Lowest Transaction Fee</h3></Card.Title>
        <Card.Text>
        Our transaction fee is much low comparing to other banks. You can deposit, transfer, and withdraw your funds with the lowest transaction charge. As our transfer system is secure and robust you can trust us.
        </Card.Text>
      </Card.Body>
    </Card>
</div >
    

    
                            
    
            
          </div>
        </div>
      </div>
    </div>
  </section>  );
}

export default Whyus;