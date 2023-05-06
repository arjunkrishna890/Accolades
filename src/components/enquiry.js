import { Form } from "semantic-ui-react";
import {Segment} from "semantic-ui-react";
import {Button} from "semantic-ui-react";
import './enquiry.css'
function Enquiry(){
return(
    <div style={{backgroundColor:"black",height:"auto"}}>
  <div style={{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:'2rem'}}>
    <div style={{width:"90%"}}>
      <Segment inverted className="form-segment" style={{backgroundColor:"#002223"}}>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input floor label='First name' placeholder='First name' />
            <Form.Input floor label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Input floor label='Company name' placeholder='Company name' />
          <Form.Input label='Enqiry' placeholder='Enquiry' />
          <Button type='submit' color="teal" inverted>Submit</Button>
        </Form>
      </Segment>
    </div>
    <div style={{width:"90%",marginTop:"2rem"}}>
      <h2 style={{color:'#004d40',textAlign:"center"}}><strong>Address</strong></h2>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{textAlign:"center"}}>
          <h5 style={{color:'#00695c'}}>Corporate Office</h5>
          <p style={{color:"white",fontSize:"1.2rem"}}>
            No.32/3071 – B | First Floor | Anjiparambil Building | 
            <br></br>Ponnurunni | NH 
            <br></br>Bypass | Vyttila | Kochi – 682 019
          </p>
        </div>
        <div style={{textAlign:"center",marginTop:"1rem"}}>
          <h4 style={{color:"#004d40"}}>Branches</h4>
          <h5 style={{color:"white"}}>Calicut | Trivandrum | Banglore | Mumbai</h5>
        </div>
      </div>
    </div>
  </div>
</div>


)
}
export default Enquiry