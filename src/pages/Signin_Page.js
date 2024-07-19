import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register';
import { useState,useEffect } from 'react';
import { Button,Card,Row,Col,Container,Form } from 'react-bootstrap';

const Signin_Page = () => {

   const [flags,setFlags] = useState("login")



   let element ;

   switch(flags){
     
          case "register":
             element = <Register/>
             break;
          case "login":
              element = <Login/>
              break;
           
          
          





   }

  



  return (
    <>
    <div>
        
          

        
       
        
         
         <Container style ={{width:"100%",backgroundColor:"red",fontSize:"15px",height:"auto",padding:"15px",backgroundColor:""}}>
         
         <Row>
          <Col lg = {6} sm = {12} >
              
              <div style={{width:"100%"}}>
                   
                   <Card>
                       <Card.Img style={{boxShadow: "12px 16px 20px -3px rgba(0,0,0,0.22)"}} src = {require("../pic.jpg")}></Card.Img>

                   </Card>


              </div>
              
          </Col>
          <Col lg = {6} sm = {12}>
              
              <div style = {{padding:"0px 35px 0px 35px"}}>
            {element}
            <p></p>
            <p>{flags == "login"?<p style={{opacity:"0.5"}}>Don't Have a account?</p>:<p style={{opacity:"0.5"}}>Already Have a Account?</p>}</p>
            { flags == "login"? <Button className='header_font button_view_change mobile_view_full' style = {{fontWeight:"bold"}}  variant = "outline-warning" size = "" onClick = {e=>setFlags("register")} >Register</Button>:<Button  className='header_font button_view_change mobile_view_full ' size = "" style = {{fontWeight:"bold"}} variant='success' onClick = {e=>{ setFlags("login") }} >Login</Button> }


             </div>
              
          </Col>

         </Row>
      
 
  </Container>
       

   </div>
    
    </>
  )
}

export default Signin_Page