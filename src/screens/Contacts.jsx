import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Unnamed from "../components/Unnamed";
function Contacts() {
    return (
      <>
      <Navbar />

      <div style={{margin:"140px", backgroundImage:"url(/B.jpeg)"}} >
      <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-7">
                <div class="section-header text-center">
                    <div class="section-top-title border-left custom--cl" style={{color:"white",textShadow: "2px 2px blue"}}> Customer Support </div>
                    <div class="card" style={{width: "25rem",margin:"20px"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Contact: (484)613-0037</li>
    <li class="list-group-item">Email: Cliffmayers0@gmail.com</li>
    <li class="list-group-item">Email: Chris.hudson1763@yahoo.com</li>
  </ul>
</div>
                </div>
            </div>
        </div>
        </div>
 
        

      <Footer />
      </>

      );
}

export default Contacts;