function Profile_withdraw() {
    return ( 
 
        <>
        <div class="header">
        <div class="header__bottom">
          <div  class="container">
            <nav class="navbar navbar-expand-lg p-0 align-items-center justify-content-between">
              <a class="site-logo site-title" href="/">
              <h1>CAPITAL CREDIT</h1>
            </a>
              <button onClick={()=>setMobile(!mobile)} id="dropdown" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="menu-toggle"></span>
              </button>
              
              {mobile?(
            <div class="navbar-collapse mt-xl-0 mt-3 collapse show" id="navbarSupportedContent" >
                <ul class="navbar-nav main-menu m-auto" id="linkItem">
                  
                                            <li>
                            <a class="" href="/about">
                                DASHBOARD
                            </a>
                        </li>
                                            <li>
                            <a class="" href="/profile/withdraw">
                                WITHDRAW
                            </a>
                        </li>
                                            <li>
                            <a class="" href="/faq">
                                LOAN
                            </a>
                        </li>
                                        <li><a class="" href="/contact">TRANSFER</a></li>
                        
                                        <li><a class="" href="/contact">MORE</a></li>
                        
                </ul>
                <div class="nav-right">
                    <select class="language-select me-3 langSel">
                                                    <option value="en" selected="">English</option>
                                            </select>

                                            <button style={{backgroundColor:"blueblack", border: "2px solid  red"}} onClick={()=>handleClick()}> Logout</button>
                    
                </div>
              </div>):(<div class="collapse navbar-collapse mt-xl-0 mt-3" id="navbarSupportedContent">
                <ul class="navbar-nav main-menu m-auto" id="linkItem">
                  <li><Link to="/">DASHBOARD</Link></li>
                                            <li>
                            <Link to="/about">
                                   WITHDRAW
                            </Link>
                        </li>
                                            <li>
                            <Link class="" to="/services">
                                     LOAN
                            </Link>
                        </li>
                                            <li>
                            <Link class="" to="/faq">
                            TRANSFER
                            </Link>
                        </li>
                        <li><Link class="" to="/contact">MORE</Link></li>
                </ul>
                <div class="nav-right">
                    <select class="language-select me-3 langSel">
                                                    <option value="en"  selected  >English</option>
                                            </select>

                                            <button style={{backgroundColor:"blueblack", border: "2px solid  red"}} onClick={()=>handleClick()}> Logout</button>
                </div>
              </div>)}
              

            
            </nav>
          </div>
        </div>
      </div>
        </>

     );
}

export default Profile_withdraw;