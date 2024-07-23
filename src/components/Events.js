import axios from 'axios'
import React, { useState ,useEffect  } from 'react'
import { Card, Col, Modal, Row,Button } from 'react-bootstrap'

const Events = ({profile_id}) => { 

    const [eventShow,setEvenshow] = useState(false);
    const [evenList,setEventList] = useState([]);
    const [buttonFlag,setButtonFlag] = useState(true)


    const addVisiting = async(event_id,profile_id) => {


       
        try{
            const res = await axios.post("http://localhost:5000/findEvent",{profile_id:profile_id,event_id:event_id})
            console.log(res)
        }catch(e){
             console.log(e)
        }
         


    }
   
    
    useEffect(()=>{
         
        const getData = async() =>{

            try{
                const res = await axios.get("http://localhost:5000/get_events ");
                setEventList(res.data)
            }catch(e){
                console.log(e)
            }

        }

        getData();

    })



  return (


    <div className='horizontal mobile_height desc_font' style = {{width:"100%",marginBottom:"50px",overflowY:"scroll",padding:"5px",gap:"5px"}} > 

           
            <Row>
                 
                 {
                    evenList.map((x)=>{
                        return  <Col lg = {6} sm = {12} xs = {12} style = {{gap:"5px"}} >
                        <Card  style = {{minHeight:"180px"}} > 

                            <Card.Body style = {{display:"",flexDirection:"",justifyContent:""}}>
                                
                                 <div><p className='desc_font'>{x.name}</p>
                                <hr></hr>
                              <p className='header_Font' style = {{fontWeight:"bold"}}  >   {x.desc}</p></div>
                                   

                                <p>{x.date?x.date.split("-").reverse().join("-"):<></>}</p>
                                Going: {x.visiting.length>0 ? x.visiting.length:"0"}
                            </Card.Body>
                               <Card.Footer className='desc_font'> <Button disabled = { x.visiting.includes( profile_id)? true:false }  onClick={e=>addVisiting(x._id,profile_id)} size = "sm" variant = "success"> Going </Button> </Card.Footer>
                                    
                                  
                            </Card>
                        <p></p>
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