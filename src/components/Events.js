import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'

const Events = () => { 

    const [eventShow,setEvenshow] = useState(false)
   
    const events =   [{ "name": "Alice Johnson", "place": "New York", "code": "NY001" },
        
        { "name": "Bob Smith", "place": "Los Angeles", "code": "LA002" },
        { "name": "Carol Davis", "place": "Chicago", "code": "CH003" },
        { "name": "David Wilson", "place": "Houston", "code": "HS004" },
        { "name": "Eve Brown", "place": "Phoenix", "code": "PH005" },
        { "name": "Frank Thomas", "place": "Philadelphia", "code": "PA006" },
        { "name": "Grace Taylor", "place": "San Antonio", "code": "SA007" },
        { "name": "Henry White", "place": "San Diego", "code": "SD008" },
        { "name": "Ivy Harris", "place": "Dallas", "code": "DA009" },
        
        { "name": "Bob Smith", "place": "Los Angeles", "code": "LA002" },
        { "name": "Carol Davis", "place": "Chicago", "code": "CH003" },
        { "name": "David Wilson", "place": "Houston", "code": "HS004" },
        { "name": "Eve Brown", "place": "Phoenix", "code": "PH005" },
        { "name": "Frank Thomas", "place": "Philadelphia", "code": "PA006" },
        { "name": "Grace Taylor", "place": "San Antonio", "code": "SA007" },
        { "name": "Henry White", "place": "San Diego", "code": "SD008" },
        { "name": "Ivy Harris", "place": "Dallas", "code": "DA009" },
                
    ]




  return (


    <div className='horizontal mobile_height desc_font' style = {{width:"100%",marginBottom:"50px",overflowY:"scroll",padding:"5px",gap:"5px"}} > 

           
            <Row>
                 
                 {
                    events.map((x)=>{
                        return  <Col lg = {6} sm = {12} xs = {12} >
                        <Card   >
                                <Card.Img onClick={()=>setEvenshow(true)} src = {require("../pic.jpg")}  style = {{height:"200px",objectFit:"cover"}}></Card.Img>
                                    
                                  
                            </Card>
                         <hr></hr>
                        </Col>
                    })
                 }
               

            </Row>
            <Modal style = {{textAlign:"center"}} centered show = {eventShow} onHide={e=>setEvenshow(false)} >
                    <Modal.Header closeButton className='header_font' >Details</Modal.Header>
                    
                    <Modal.Body  className='desc_font' >Hello</Modal.Body>
            </Modal>
        

    </div>

  )
}

export default Events