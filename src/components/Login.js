import React from 'react'
import {Button, Form, Row,Col, Container, Card} from 'react-bootstrap';


const Login = () => {
    const onChange = () => {}
  return ( 
    <div className='mobile_view_up' style={{width:"100%",fontSize:"11px",padding:"",backgroundColor:""}}>
                               <h5 className='header_font'> Login</h5> 
                               <p></p>
            <Form>
                    <Form.Group className="mb-3" controlId="">
                       
                        <Form.Control type="email" placeholder="username" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <p></p>
                    <hr></hr>
                    <Button size = "sm" variant = "outline-success"  className=' header_font button_view_change mobile_view_full mobile_view_up' type="submit">
                        Submit
                    </Button>
                    <Button href = "/home" size = "sm" variant = "outline-success"  className=' header_font button_view_change mobile_view_full ' type="submit">
                        Go Home
                    </Button>
                    </Form>


                </div>
  )
}

export default Login