import Navbar1 from "../components/navbar1"
import Enquiry from "../components/enquiry"

function About(){
    return(
<div>
    <Navbar1/>
   <div className="container">
   <h1 style={{color:"#00796b"}}>The Ultimatum of Experiences</h1>
   <p style={{fontSize:"1rem",color:"grey",letterSpacing:".1rem",wordSpacing:".3rem"}}>
    Accolades, the best digital marketing agency in Kerala that properly takes care of too many of internet marketing solutions for your premium brand. Be it the innovative designs, content, Google Ads, SEO Service, Social Media Marketing or other Web services, everything is available under one roof . This effective tactic allows us to scale our diplomatic services to develop a strategy 
   for your brand that is refined over a course of time so that it benefits your business perfectly.
    We strictly believe in maximizing your sales, captivate appropriate traffic to your official website,
     and turn visitors into your potential customers. Regardless of the business’s size,
      Internet marketing gives access to the mass market at result-oriented pricing,
       and it inculcates a personal style of successful marketing.</p>
       <h5 style={{color:"#00796b"}}>EXPLORE PORTFOLIOS</h5>
       <h1 style={{color:"#00796b"}}>
A compilation of newly consummated projects</h1>
<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://accoladesmedia.co.in/wp-content/uploads/2020/02/PKM_poster.jpg" alt="Alappuzha" width="1100" height="800"/>
    </div>
    <div class="carousel-item">
      <img src="https://accoladesmedia.co.in/wp-content/uploads/2020/02/Lake-palace2.jpg" alt="Kovalam" width="1100" height="800"/>
    </div>
    <div class="carousel-item">
      <img src="https://accoladesmedia.co.in/wp-content/uploads/2020/02/swiss.jpg" alt="Trivandrum" width="1100" height="800"/>
    </div>
    <div class="carousel-item">
      <img src="https://accoladesmedia.co.in/wp-content/uploads/2020/02/alma_jan23.jpg" alt="Trivandrum" width="1100" height="800"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
   </div>
    <Enquiry/>
</div>
    )
}
export default About