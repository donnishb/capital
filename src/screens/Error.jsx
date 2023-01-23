import Footer from "../components/Footer";
function Error() {
    return ( <>
    <i class="bi bi-x-circle" style={{color:"red",fontSize:"100px"}}></i>

    <div class="card text-center">
  <div class="card-header">
    Status
  </div>
  <div class="card-body">
    <h5 class="card-title">Not Successful</h5>
    <p class="card-text">Hello, due to too many login attempts your account has been suspended from making transactions at the moment please contact customer support/visit the nearest branch for assistance.</p>
    <a href="/profile" class="btn btn-primary">Done</a>
  </div>
  <div class="card-footer text-muted">
   Try again after resolve
  </div>
  
    </div>
    <Footer />
    </> );
}

export default Error;