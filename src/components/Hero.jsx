import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function Hero(){
const navigate = useNavigate();

    return ( <section className="hero bg_img"
    style={{backgroundImage: "url(/bbb.jpeg)", backgroundRepeat: "no-repeat",color:""}}>
    <div className="black">
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center" >
                <h2 className="hero__title text-white wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s" >
                    Welcome to Capital Credit Bank E-banking System
                </h2>
                <p className="text-white mt-4 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                    Capital Credit Bank is a safe, fast, easy, and efficient e-Banking system <div> Enables you access to your bank account and to carry out online banking services.</div>
                </p>
                
                    <Button variant="primary" onClick={()=>navigate("/register")}>Create an Account</Button>
                
            </div>
        </div>
    </div>
    
</section> );
}

export default Hero;