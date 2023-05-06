import React from "react";
import { Menu,Icon } from "semantic-ui-react";
import './navbar1.css'
import { useNavigate } from "react-router-dom";

function Navbar1(){
    var history = useNavigate()
    return(
<div style={{display:"flex"}} className="navbar">
    <img src="http://accoladesmedia.co.in/wp-content/uploads/l8.png" style={{width:"20rem",padding:"1rem"}}/>
    <Menu secondary>
        <Menu.Item  ><span  style={{color:"#00796b",fontSize:"1.2rem",fontWeight:"lighter",paddingLeft:"20rem"}}onClick={()=>history('/')}><Icon name="home"></Icon>HOME</span></Menu.Item>
        <Menu.Item ><span style={{color:"#00796b",fontSize:"1.2rem",fontWeight:"lighter",paddingLeft:"2rem"}}onClick={()=>history('/about')}><Icon name="binoculars"></Icon>ABOUT</span></Menu.Item>
        <Menu.Item ><span style={{color:"#00796b",fontSize:"1.2rem",fontWeight:"lighter",paddingLeft:"2rem"}} onClick={()=>history('/services')}><Icon name="asterisk"></Icon>SERVICE</span></Menu.Item>
        <Menu.Item ><span style={{color:"#00796b",fontSize:"1.2rem",fontWeight:"lighter",paddingLeft:"2rem"}}><Icon name="envira gallery"></Icon>GALLERY</span></Menu.Item>
        <Menu.Item ><span style={{color:"#00796b",fontSize:"1.2rem",fontWeight:"lighter",paddingLeft:"2rem"}}onClick={()=>history('/contact')}><Icon name="mail"></Icon>CONTACT</span></Menu.Item>
        
      </Menu>

   
</div>
    )
}
export default Navbar1