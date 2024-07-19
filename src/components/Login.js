import React from 'react'
import {Button, Form} from 'react-bootstrap';


const Login = () => {
    const onChange = () => {}
  return ( 
    <div style ={{width:"100%",fontSize:"15px",display:"flex",justifyContent:"center",textAlign:"center",height:"auto",backgroundColor:"",alignItems:""}}>
         
         <div style = {{width:"auto",height:"auto",backgroundColor:"white",border:"",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",padding:"15px 30px 30px 30px",textAlign:"start",borderRadius:"8px",marginTop:"10px"}} >
            <p></p>
            <h5 style={{fontWeight:"bolder",color:"green"}}>Login</h5>
            <hr></hr>
         <Form>
        
      <Form.Control placeholder='name' size='sm'
        type="text"
        
      />
      <p></p>
      <Form.Control placeholder='password' size='sm'
        type="password"
        
      />
     <p></p>
    
     <Button style = {{fontWeight:"bolder",width:"100%"}} variant='success' size='sm'>Login</Button>

      
    </Form>
            
             

         </div>
        

    </div>
  )
}

export default Login