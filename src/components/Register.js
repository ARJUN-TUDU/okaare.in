import React from 'react'
import { Button ,Form} from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'

const Register = () => {
  return (
    <div style ={{height:"auto",backgroundColor:"yellow",alignItems:""}}>
        
        <div  style = {{width:"100%",height:"auto",backgroundColor:"white",border:"",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",padding:"15px 30px 30px 30px",textAlign:"start",marginTop:"10px"}} >
      <p></p>
       <h5 style={{fontWeight:"bolder",color:"GrayText"}}>Register</h5>
     <hr></hr>
      <Form>
     
      <p></p>
     
      <p></p>
      <Form.Control placeholder='name' size='sm'></Form.Control>
   
      <p></p>
      
      <Form.Control placeholder='email' size='sm'></Form.Control>
   
      <p></p>
      <Form.Control placeholder='password' size='sm'></Form.Control>
   
    
      <Form.Control placeholder='re-enter password' size='sm'></Form.Control>
   
      <p></p>
      </Form>
      
    
     <div style = {{width:"100%",textAlign:""}}><Button size = "sm" variant='warning' style = {{fontWeight:"bold",color:"white"}}>Register</Button></div>
     <p></p>
       
        

    </div>
        

   </div>
  )
}

export default Register