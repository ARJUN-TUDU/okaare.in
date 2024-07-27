import { set } from 'mongoose';
import React , {useEffect, useState} from 'react'
import { Button, Container, Form ,Card} from 'react-bootstrap'
import { IoSend } from "react-icons/io5";

const Chat = () => {
    const [currMsg,setCurrMsg] = useState({
         name:"p1",
         msg:""
    })
   
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
          <div style={{ height: "92%", overflowY:"scroll" , backgroundColor: "" }}>


          <ul>
             
          {
                msgs.map((x)=>{
                    if(x.name === "p1"){
                       return <li style={{display:""}}> <div style = {{width:"100%",marginBottom:"10px",display:"flex", justifyContent:"flex-end"  }} >
                         
                          <div style = {{maxWidth:"260px"}}>
                              
                          <Card>
                            <Card.Header className='header_font'>{x.name}</Card.Header>
                            <Card.Body className = 'desc_font' >{x.msg}</Card.Body>
                          </Card>

                          </div>
                         
                        </div></li>
                    }else{
                       return <li style={{display:""}}> <div style = {{width:"100%",marginBottom:"10px",display:"flex", justifyContent:"flex-start"  }} >
                         
                         <div style = {{maxWidth:"260px"}}>
                              
                         <Card>
                         <Card.Header  className='header_font'>{x.name}</Card.Header>
                         <Card.Body className = 'desc_font'  >{x.msg}</Card.Body>
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
                <Form.Control onChange={e=>setCurrMsg((prev)=>{
                    return {...prev,msg:e.target.value}
                })} style = {{width:"70%",height:"50px"}} type='text' ></Form.Control>
                <Button onClick={(e)=>{
                    return setMsgs((prev)=>{
                        return [...prev,currMsg]
                    })
                }} variant = "success" style = {{width:"30%"}}><IoSend size={25} /></Button>
              </Form>
             
          </div>

      </div>
  )
}

export default Chat