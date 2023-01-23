function Footer() {
    return ( <footer className="footer position-relative z-index-2" style={{backgroundColor:"slategrey"}}>
    <div className="footer-bottom-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L48,266.7C96,277,192,299,288,282.7C384,267,480,213,576,165.3C672,117,768,75,864,96C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
          <div className="footer-widget">
            <h3 className="footer-widget__title">About Us</h3>
            <p>Capital Credit Bank is a complete e-Banking system. We have account-holders from almost all over the world. This is getting popular day by day. Our system is secure and robust. You may feel safe about your deposited funds.</p>
            
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
          <div className="footer-widget">
            <h3 className="footer-widget__title">Quick Links</h3>
            <ul className="short-link-list">
                <li ><a style={{textDecoration:"none",color:"#22178bff"}} href="/signin">Login</a></li>
                <li><a style={{textDecoration:"none",color:"#22178bff"}} href="/register">Register</a></li>
                <li><a style={{textDecoration:"none",color:"#22178bff"}} href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
          <div className="footer-widget">
            <h3 className="footer-widget__title">Page</h3>
            <ul className="short-link-list">
                                    <li>
                        <a style={{textDecoration:"none",color:"#22178bff"}} >
                        Company Policy</a>
                    </li>
                                    <li>
                        <a style={{textDecoration:"none",color:"#22178bff"}} >
                        Terms of Services</a>
                    </li>
                                    <li>
                        <a style={{textDecoration:"none",color:"#22178bff"}} >
                        Privacy Policy</a>
                    </li>
                            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
          <div className="footer-widget">
            <h3 className="footer-widget__title">Contact Us</h3>
            <ul className="footer-info-list">
                                <li>
                    
                                <p>4926 J ST Lincoln, NE 68510</p>
                               </li>
                                <li>
                                      <p>ibanking@capitalcreditbank.cf</p>
                                </li>
                                <li>
                                       <p>(484) 613-0037</p>
                                 </li>
                            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="row gy-4 align-items-center">
         

          <div className="col-lg-9 col-sm-6 order-lg-3 order-2 text-sm-end text-center">
            <p>Copyright © 2022  Capital Credit Bank | All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer> );
}

export default Footer;