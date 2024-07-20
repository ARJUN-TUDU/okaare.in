import React, { useState } from 'react'
import {Button, Form, Row,Col, Container, Card,Modal} from 'react-bootstrap';
import axios from 'axios';


const Login = () => {

    const [data,setData] =  useState({
        name:"",
        age:0,
        password:"",
        phone:"",
        profile_photo:"",
        photos:[],
        date:"",
        email:""

    })

    const [showFlag,setShowFlag] =useState(false)
    
    const sendLogin = async function(){
         
        try{
            const response = await axios.post("http://localhost:5000/login",data);
            if(response.data.status == "done"){
                window.location.href = "/home"
            }else{
                 setShowFlag(true)
            }
        }catch(e){
            console.log(e)
        }


    }








    const onChange = () => {}
  return ( 
    <div className='mobile_view_up' style={{width:"100%",fontSize:"11px",textAlign:"center",padding:"",backgroundColor:""}}>
                               <h5 className='header_font'> Login</h5> 
                               <p></p>
            <Form>
                    <Form.Group className="mb-3" controlId="">
                       
                        <Form.Control onChange={e=>setData((prev)=>{
                            return {...prev,name:e.target.value}
                        })} type="name" placeholder="username" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p></p>
                    <hr></hr>
                   
                  
                    </Form>
                    <Button  onClick={sendLogin} size = "sm" variant = "outline-success"  className=' header_font button_view_change mobile_view_full ' style= {{width:"100%"}} type="submit">
                        Login
                    </Button>

                    <Modal centered style = {{textAlign:"center"}} show = {showFlag} onHide={e=>setShowFlag(false)} >
                         <Modal.Header closeButton></Modal.Header>
                        <Modal.Body> <span className='desc_font' style={{color:"red",fontWeight:"bold",fontSize:"19px"}} > Wrong Details<p style = {{color:"black"}}>Register first</p></span> </Modal.Body>
                        

                    </Modal>


                </div>
  )
}

export default Login