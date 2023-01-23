import Footer from "../components/Footer";
function Success() {
    return ( <>
    <i class="bi bi-check-circle" style={{color:"green",fontSize:"100px"}}></i>
     
    <div class="card text-center">
  <div class="card-header">
    Status
  </div>
  <div class="card-body">
    <h5 class="card-title">Successful</h5>
    <p class="card-text">Your transfer has been scheduled complete approval in the mail sent to your mailbox</p>
    <a href="/profile" class="btn btn-primary">Done</a>
  </div>
  <div class="card-footer text-muted">
   just now
  </div>
  <Footer />
    </div>




    </> );

    
}

export default Success;