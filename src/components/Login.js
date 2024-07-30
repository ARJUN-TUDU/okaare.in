import React, { useState } from 'react'
import { Form, Row,Col, Container, Card,Modal} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import { useCookies } from 'react-cookie';
import {Button} from '@mui/material'



const Login = () => {
    
    const [cookie,setCookie] = useCookies("token")
  

    const navigate = useNavigate();
    const [data,setData] =  useState({
        name:"",
        age:0,
        password:"",
        re_password:"",
        phone:"",
        profile_photo:"",
        photos:[],
        date:"",
        email:""

    })

    const [showFlag,setShowFlag] = useState(false)


    
  
    const sendLogin = async function(){
         
        try{

            const response = await axios.post("http://localhost:5000/login",{...data,token:cookie.token});
            
            if(response.data.status){
               console.log('')
            }
            

        }catch(e) 
        {
            console.log(e)
        }


    }

    








   
  return ( 
    <div className='mobile_view_up' style={{width:"100%",fontSize:"11px",textAlign:"center",padding:"",backgroundColor:""}}>
                               <h5 className='header_font'> Login</h5> 
                               <p></p>
                               <Button variant = "contained" >Hello</Button>
                   <Form>
                    <Form.Group className="mb-3" controlId="">
                       
                        <Form.Control onChange={e=>setData((prev)=>{
                            return {...prev,name:e.target.value}
                        })} type="name" placeholder="username" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        
                        <Form.Control onChange={e=>setData((prev)=>{
                            return {...prev,password:e.target.value}
                        })} type="password" placeholder="Password" />
                    </Form.Group>
                    <p></p>
                    <hr></hr>
                   
                  
                    </Form>
                    <Button  onClick={sendLogin} size = "sm" variant = "outline-success"  className=' header_font button_view_change mobile_view_full ' style = {{width:"100%",marginBottom:"15px"}} type="submit">
                        Login
                    </Button>
                    <Button   size = "sm" variant = "light"  className=' header_font button_view_change mobile_view_full ' style= {{width:"100%"}} type="submit">
                        Enter with demo
                    </Button>
                    

                    <Modal centered style = {{textAlign:"center"}} show = {showFlag} onHide={e=>setShowFlag(false)} >
                         <Modal.Header closeButton></Modal.Header>
                        <Modal.Body> <span className='desc_font' style={{color:"red",fontWeight:"bold",fontSize:"19px"}} > Wrong Details<p style = {{color:"black"}}>Register first</p></span> </Modal.Body>
                        

                    </Modal>




                </div>
  )
}

export default Login 