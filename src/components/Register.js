import React, { useState } from 'react'
import { Button ,Form} from 'react-bootstrap'
import {Row,Col,Container,Card,Modal} from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
    const schema = { name:String,
    age:Number,
    password:String,
    email:String,
    phone:Number,
    profile_photo:String,
    photos:[],
    date:String
}    

    const [loader,setLoader] = useState(false);
    const [msg,setMsg] = useState("Wait")

    const [data,setData] = useState({
        name:"",
        age:0,
        password:"",
        phone:"",
        profile_photo:"",
        photos:[],
        date:"",
        email:""

    })

    const send = async() => {
        setLoader(true)
         try{

            setLoader(true)
            const response = await axios.post("http://localhost:5000/register",data)
            
            if(response.status == 200){
                 
                setMsg("done");
                window.location.href = "/home"
                 
            }

         }catch(e){
            console.log(e)
         }




    }



  
  return (
    <div className='mobile_view_up' style={{width:"100%",fontSize:"11px",padding:"",backgroundColor:""}}>
    <h5 className='header_font'> Register</h5> 
    <p></p>
                            <Form>
                            <Form.Group className="mb-3" controlId="">

                            <Form.Control value={data.name} onChange={e=>setData((prev)=>{
                                return {...prev,name:e.target.value}
                            })} type="text" placeholder="name" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">

                            <Form.Control value={data.email} onChange={e=>setData((prev)=>{
                                return {...prev,email:e.target.value}
                            })} type="text" placeholder="email" />

                            </Form.Group>
                         
                            <Form.Control value={data.password} onChange={e=>setData((prev)=>{
                                return {...prev,password:e.target.value}
                            })} type="text" placeholder="password" />

                                    
                                   

                                    <Form.Control type="password" placeholder="re-enter Password" />
                                    
                            <p></p>
                            <hr></hr>
                            
                            </Form>
                            <Button onClick={send} size = "sm" variant = "outline-success"  className=' header_font button_view_change mobile_view_full mobile_view_up' type="">
                            Submit
                            </Button>

                          
                                  
                            <Modal  style = {{textAlign:"center"}}  centered show = {loader} onHide={e=>setLoader(false)}>
                                   
                                   <h5></h5>
                                    <Modal.Body  style = {{color:"black",fontSize:"15px"}} >{
                                  
                                  msg === "Wait"?"Wait": <span className='header_font' style = {{color:"green"}} >Registration Successfull</span> 
                                
                                }</Modal.Body>
                            </Modal>



                            </div>
  )
}

export default Register