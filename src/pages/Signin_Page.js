import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button,Card,Row,Col,Container,Form } from 'react-bootstrap';

const Signin_Page = () => {

   const [flags,setFlags] = useState("login")
   const navigate = useNavigate()



   let element ;

   switch(flags){
     
          case "register":
             element = <Register/>
             break;
          case "login":
              element = <Login/>
              break;
           
          
          





   }

   const demoEnter = function(){
    navigate("/home/66a523b9da45dd2a4dfee8c3")
}




  return (
    <>
    <div style = {{width:"100%",textAlign:"center"}}>
        
          

        
       
        
         
         <Container style ={{width:"300px",textAlign:"center",backgroundColor:"red",fontSize:"15px",height:"auto",padding:"15px",backgroundColor:""}}>
   
              
              <div style = {{width:"100%"}}>
            {element}
            <p></p>
            <p>{flags == "login"?<p style={{opacity:"0.5"}}>Don't Have a account?</p>:<p style={{opacity:"0.5"}}>Already Have a Account?</p>}</p>
            { flags == "login"? <Button className='header_font button_view_change mobile_view_full' style = {{fontWeight:"bold",width:"100%"}}  variant = "outline-warning" size = "" onClick = {e=>setFlags("register")} >Register</Button>:<Button  className='header_font button_view_change mobile_view_full ' size = "" style = {{fontWeight:"bold",width:"100%"}} variant='success' onClick = {e=>{ setFlags("login") }} >Login</Button> }
                

             </div>
              
         
      
 
  </Container>
       
   <a className='desc_font' href= "#">forgot your password?</a>
   <p></p>
                    <Button  variant = "light" onClick={e=>demoEnter()}>Enter with demo </Button>
   </div>
    
    </>
  )
}

export default Signin_Page