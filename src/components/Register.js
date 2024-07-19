import React from 'react'
import { Button ,Form} from 'react-bootstrap'
import {Row,Col,Container,Card} from 'react-bootstrap'

const Register = () => {
  return (
    <div className='mobile_view_up' style={{width:"100%",fontSize:"11px",padding:"",backgroundColor:""}}>
    <h5 className='header_font'> Register</h5> 
    <p></p>
                            <Form>
                            <Form.Group className="mb-3" controlId="">

                            <Form.Control type="text" placeholder="name" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="">

                            <Form.Control type="email" placeholder="email" />
                            </Form.Group>
                         

                                    <Form.Control type="password" placeholder="Password" />
                                    
                                   

                                    <Form.Control type="password" placeholder="re-enter Password" />
                                    
                            <p></p>
                            <hr></hr>
                            <Button size = "sm" variant = "outline-success"  className=' header_font button_view_change mobile_view_full mobile_view_up' type="submit">
                            Submit
                            </Button>
                            </Form>


                            </div>
  )
}

export default Register