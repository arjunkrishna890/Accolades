import React from "react"
import { Icon } from "semantic-ui-react"


function Testimonial(){
return(
<div style={{display:"flex",marginTop:"5rem",marginLeft:"8rem"}}>
 
<div class="card" style={{width:"25rem",margin:"1rem",height:"25rem",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
            <img src="https://accoladesmedia.co.in/wp-content/uploads/rak-testimonials.jpg" class="card-img-top" style={{width:"6rem",marginLeft:"9rem",marginTop:"1rem",border:"solid #00796b .2rem",boxShadow:"rgba(0, 0, 0, 0.25) 0px 5px 15px",borderRadius:"50px"}} alt="..."/>
        <div class="card-body">
        <div style={{display:"flex",paddingLeft:"7.6rem"}}>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
            </div>
        <h5 class="card-title" style={{color:"#00796b",fontWeight:"bolder",marginLeft:"7rem",fontSize:"1.5rem"}}>Rak Interiors</h5>
       
            <p class="card-text" style={{textAlign:"center",fontSize:"1rem"}}>Definitely great value for the money ..The very best company for professional digital marketing services..Highly recommend</p>
        </div>
        </div>

        <div class="card" style={{width:"25rem",margin:"1rem",height:"25rem",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
            <img src="https://accoladesmedia.co.in/wp-content/uploads/ocean-testimonials.jpg" class="card-img-top" style={{width:"6rem",marginLeft:"9rem",marginTop:"1rem",border:"solid #00796b .2rem",boxShadow:"rgba(0, 0, 0, 0.25) 0px 5px 15px",borderRadius:"50px"}} alt="..."/>
        <div class="card-body">
        <div style={{display:"flex",paddingLeft:"7rem"}}>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
            </div>
        <h5 class="card-title" style={{color:"#00796b",fontWeight:"bolder",marginLeft:"5rem",fontSize:"1.5rem"}}>Ocean Polymers</h5>
       
            <p class="card-text" style={{textAlign:"center",fontSize:"1rem"}}>I would like to extend our gratitude for the effort you have put to make this project successful. The endless hours you have spent working on this project, and the professionalism you have shown impressed the entire team immensely. Once again, thank you for the outstanding performance of the web design project. Keep it up!</p>
        </div>
        </div>


        <div class="card" style={{width:"25rem",margin:"1rem",height:"25rem",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"  }}>
            <img src="https://accoladesmedia.co.in/wp-content/uploads/mountainshadows-testimonials.jpg" class="card-img-top" style={{width:"6rem",marginLeft:"9rem",marginTop:"1rem",border:"solid #00796b .2rem",boxShadow:"rgba(0, 0, 0, 0.25) 0px 5px 15px",borderRadius:"50px"}} alt="..."/>
        <div class="card-body">
        <div style={{display:"flex",paddingLeft:"7.6rem"}}>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
                <Icon name="star" color="yellow"/>
            </div>
        <h5 class="card-title" style={{color:"#00796b",fontWeight:"bolder",marginLeft:"5rem",fontSize:"1.5rem"}}>Mountain Shadow</h5>
       
            <p class="card-text" style={{textAlign:"center",fontSize:"1rem"}}>I would like to extend our gratitude for the effort you have put to make this project successful. The endless hours you have spent working on this project, and the professionalism you have shown impressed the entire team immensely. 
            Once again, thank you for the outstanding performance of the web design project. Keep it up!</p>
        </div>
        </div>

       
</div>
)
}
export default Testimonial