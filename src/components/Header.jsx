
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
const [mobile,setMobile] = useState(false); 
const handleClick = ()=>{}
    return (
        <div class="header">
        <div class="header__bottom">
          <div class="container">
            <nav class="navbar navbar-expand-lg p-0 align-items-center justify-content-between">
              <a class="site-logo site-title" href="/">
                <img src="https://ibanking.capitalcreditbank.cf/assets/images/logoIcon/logo.png" alt="logo" />
            </a>
              <button onClick={()=>setMobile(!mobile)} id="dropdown" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="menu-toggle"></span>
              </button>
              
              {mobile?(
            <div class="navbar-collapse mt-xl-0 mt-3 collapse show" id="navbarSupportedContent" >
                <ul class="navbar-nav main-menu m-auto" id="linkItem">
                  <li><a class="active" href="/">Home</a></li>
                                            <li>
                            <a class="" href="/about">
                                About Us
                            </a>
                        </li>
                                            <li>
                            <a class="" href="/services">
                                Services
                            </a>
                        </li>
                                            <li>
                            <a class="" href="/faq">
                                FAQ
                            </a>
                        </li>
                                        <li><a class="" href="/contact">Contact</a></li>
                </ul>
                <div class="nav-right">
                    <select class="language-select me-3 langSel">
                                                    <option value="en" selected="">English</option>
                                            </select>

                                            <a href="/signin" class="btn btn-sm py-2 btn-outline--gradient me-3">Sign In</a>
                        <a href="/register" class="btn btn-sm py-2 custom--bg text-white">Sign Up</a>
                    
                </div>
              </div>):(<div class="collapse navbar-collapse mt-xl-0 mt-3" id="navbarSupportedContent">
                <ul class="navbar-nav main-menu m-auto" id="linkItem">
                  <li><Link to="/">Home</Link></li>
                                            <li>
                            <Link to="/about">
                                About Us
                            </Link>
                        </li>
                                            <li>
                            <Link class="" to="/services">
                                Services
                            </Link>
                        </li>
                                            <li>
                            <Link class="" to="/faq">
                                FAQ
                            </Link>
                        </li>
                                        <li><Link class="" to="/contact">Contact</Link></li>
                </ul>
                <div class="nav-right">
                    <select class="language-select me-3 langSel">
                                                    <option value="en"  selected  >English</option>
                                            </select>

                                            <Link to="/signin" class="btn btn-sm py-2 btn-outline--gradient me-3">Sign In</Link>
                        <Link to="/register" class="btn btn-sm py-2 custom--bg text-white">Sign Up</Link>
                    
                </div>
              </div>)}
              

            
            </nav>
          </div>
        </div>
      </div>)
}

export default Header;