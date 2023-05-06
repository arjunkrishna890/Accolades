import Navbar1 from "../components/navbar1"
import Enquiry from "../components/enquiry"
import { Form,Segment,Button } from "semantic-ui-react"
function Contact(){
    return(
        <div>
            <Navbar1/>
            <div className="contianer" style={{justifyContent:"center",textAlign:"center",marginBottom:"10rem"}}>
            <h1 style={{color:"#00796b"}}>Contact Us</h1>
            <h2 >Reach out to know the cost to attain your potential clients</h2>
            <h2>Corporate Office</h2>
            <h3>(Kochi, Kerala)</h3>
            <p>Accolades Integrated Pvt Ltd | No.32/3071 – B | First Floor Anjiparambil Building | Ponnurunni | NH Bypass | Vyttila | Kochi – 682 019</p>
            <strong>Mail to : mail@accoladesmedia.co.in</strong><br/>
            <strong>Call us : +91 90726 19922 | 87143 04849</strong>
            <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.771123961436!2d76.316745!3d9.980235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cf7e6baeda3%3A0x1f053eaaf85f927b!2sACCOLADES%20Integrated%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1683360365294!5m2!1sen!2sin" style={{width:"80rem",height:"30rem"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <br/>
          
            </div>
            <Enquiry/>
        </div>
    )
}
export default Contact