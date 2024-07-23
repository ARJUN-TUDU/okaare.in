import axios from 'axios';
import React ,{useEffect, useState} from 'react'
import {Card,Input, Tab, Tabs,Form,Button, Row,Col} from 'react-bootstrap'
const Admin = () => {
  
    const [date,setDate] = useState();
    const showDate = date+"".split().reverse().join();

    const [event,setEvent] = useState({
        name:"",
        likes:0,
        desc:"",
        visited:[String],
        visitng:[String],
        address:String,
        date : ""
    })
    
    const creatEvent = async() => {

         try{
            const response = await axios.post("http://localhost:5000/create_event",event);
            console.log(response)
         }catch(e){
            console.log(e)
         }



    }

    useEffect(()=>{

    },[])





  return (


    <div style = {{width:"100%",height:"70vh",backgroundColor:"white"}} > 

          <Tabs>
              <Tab eventKey="home" title = "Event" >
                   <Row>
                     <Col lg = {6} sm = {12} xs = {12} >
                     <div style = {{width:"",fontSize:"13px",padding:"5px"}} >
                        
                        <Card><Card.Header>Add a Event</Card.Header>
                            <Card.Body>
                            <Form> 
                              <Form.Control  onChange = {e=>setEvent((prev)=>{
                                return {...prev,name:e.target.value}
                              })}  type = "text" placeholder='name' ></Form.Control>
                              <Form.Control type = "text" placeholder='desc' onChange={e=>setEvent((prev)=>{
                                return {...prev,desc:e.target.value}
                              })} ></Form.Control>
                              <p></p>
                              <Form.Control type = "file" ></Form.Control>
                              <p></p>
                              <input onChange={e=>setEvent((prev)=>{
                                return {...prev,date:e.target.value}
                              })} aria-label="Date" type="date" /> 
                              <p></p>

                              <Button onClick = {creatEvent} type = "submit" variant = "outline-success" size = "sm" >Upload</Button>
                              
                              
                             </Form>
                            </Card.Body>
                        </Card>

                    </div>

                     </Col>
                     <Col lg = {6} sm = {12} xs = {12} >
                       
                     </Col>
                   </Row>
              </Tab>
              <Tab eventKey="contact" title = "Persons" >
                   <h2>dwawad</h2>
             </Tab>
              

          </Tabs>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7350.240509926953!2d88.36855174185476!3d22.90893491701411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f893dac84adb73%3A0x5da9b0340faea3d5!2sKanagar%2C%20Bandel%2C%20West%20Bengal%20712103!5e0!3m2!1sen!2sin!4v1721754961185!5m2!1sen!2sin" style = {{width:"600PX" ,height:"450PX"}}  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

       
    </div>

  )
}

export default Admin