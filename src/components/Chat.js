import { set } from 'mongoose';
import React , {useEffect, useState} from 'react'
import { Button, Container, Form ,Card, Modal} from 'react-bootstrap'
import { IoSend } from "react-icons/io5";

const Chat = () => {
    const [currMsg,setCurrMsg] = useState({
         name:"p1",
         msg:""
    })
    const sendMsg = () => {
        setMsgs((prev)=>{
            return [...prev,currMsg]
        })
        setCurrMsg((prev)=>{
            return {...prev,msg:""}
        })
    }
    const [modalFlag,setModalFlag] = useState(false)
    const [modalMsg,setModalMsg] = useState("")
   
     const showModal = function(status,msg){
        
        setModalFlag(status)
        setModalMsg(msg)
        
     }

    const [msgs ,setMsgs] = useState([

        {name:"p1",msg:"p1 1 msg"},
        {name:"p2",msg:"p2  2 msg"},
        {name:"p1",msg:"p1  3 msg"},
        {name:"p2",msg:"p2 4 msg"},
        {name:"p2",msg:"p2 5 msg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p1",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p2",msg:"p2 5 m sg"},
        {name:"p1",msg:"p2 5 m sg"},
        {name:"p1",msg:"  dwdawd awddaw dawdaw dawedawdf waqddawdaw aw dawd awdawd awdawd adawddddddddddd awd awd aw daw "},
        {name:"p2",msg:" dwdawd awddaw dawdaw dawedawdf waqddawdaw aw dawd awdawd awdawd adawddddddddddd awd awd aw daw "}
    ])
    
    useEffect(()=>{
      
    },[])

    

  return (
      <div style={{ width: "100%", height: "68vh", backgroundColor: "" }}>
        <div  style = {{height:"10%",marginBottom:"10px",backgroundColor:""}}>
            <Card>
                <Card.Body className='header_font'>
                    Susmita
                    <br></br>
                    {Date.now()}
                    </Card.Body>
               
            </Card>
        </div>
        <br></br>
        <Modal centered show = {modalFlag} onHide={e=>setModalFlag(false)} >
            <Modal.Header className='header_font bg-red '  closeButton>Delet This Massege</Modal.Header>
            <Modal.Body>
             
               
                <p className='desc_font' style = {{marginBottom:"30px"}}>{modalMsg}</p>
                <p></p>
               <Button className='mobile_view_full' variant= "danger">Delete</Button> <Button className='mobile_view_up mobile_view_full' variant= "outline-success">Copy</Button>


                
           
            </Modal.Body>
        </Modal>
          <div style={{ height: "92%", overflowY:"scroll" , backgroundColor: "" }}>


          <ul>
             
          {
                msgs.map((x)=>{
                    if(x.name === "p1"){
                       return <li style={{display:""}}> <div style = {{width:"100%",marginBottom:"10px",display:"flex", justifyContent:"flex-end"  }} >
                         
                          <div style = {{maxWidth:"260px"}}>
                              
                          <Card   onClick = {e=>showModal(true,x.msg)}>
                           
                            <Card.Body className = 'desc_font' >
                            <p className='header_font' style = {{color:"green" ,fontSize:"15px"}}>{x.name}</p>
                                {x.msg}</Card.Body>
                            
                           
                          </Card>

                          </div>
                         
                        </div></li>
                    }else{
                       return <li style={{display:""}}> <div style = {{width:"100%",marginBottom:"10px",display:"flex", justifyContent:"flex-start"  }} >
                         
                         <div style = {{maxWidth:"260px"}}>
                              
                         <Card  onClick = {e=>showModal(true,x.msg)}>
                        
                         <Card.Body className = 'desc_font' >
                                <p className='header_font' style = {{color:"green" ,fontSize:"15px"}}>{x.name}</p>
                                {x.msg}</Card.Body>
                       
                          </Card>
    
                              </div>
                             
                       
                      </div></li>
                    }
                })
            }
          </ul>
                
            

            </div>   
          
          <div style={{ height: "" ,backgroundColor:"" }} >
          <Form style = {{display:"flex",gap:"5px",padding:"15px 2px 15px 2px"}}>
                <Form.Control value = {currMsg.msg} onChange={e=>setCurrMsg((prev)=>{
                    return {...prev,msg:e.target.value}
                })} style = {{width:"70%",height:"50px"}} type='text' ></Form.Control>
                <Button onClick={sendMsg} variant = "success" style = {{width:"30%"}}><IoSend size={25} /></Button>
              </Form>
             
          </div>

      </div>
  )
}

export default Chat