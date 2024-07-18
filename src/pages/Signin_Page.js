import React from 'react'
import Login from '../components/Login'
import Register from '../components/Register';
import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';

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
    <div style ={{width:"100%",display:"flex",justifyContent:"center",textAlign:"",height:"auto",backgroundColor:"",alignItems:"center"}}>
        
        <div className='' style = {{height:"auto",backgroundColor:"",border:"",padding:"",textAlign:"start",marginTop:""}} >
          
           <div style = {{padding:"25px 0px 0px 0px"}}>
            {element}


           </div>

         <hr></hr>
         <p>{flags == "login"?<p style={{opacity:"0.5"}}>Don't Have a account?</p>:<p style={{opacity:"0.5"}}>Already Have a Account?</p>}</p>
        
         <div style = {{width:"100%",textAlign:""}}>{ flags == "login"? <Button style = {{fontWeight:"bold"}}  variant = "outline-warning" size = "sm" onClick = {e=>setFlags("register")} >Register</Button>:<Button size = "sm" style = {{fontWeight:"bold"}} variant='success' onClick = {e=>{ setFlags("login") }} >Login</Button> }</div>
         <p></p>
           
            

        </div>
       

   </div>
    
    </>
  )
}

export default Signin_Page