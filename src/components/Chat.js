import React , {useEffect, useState} from 'react'
import { Button, Container, Form ,Card} from 'react-bootstrap'
import { IoSend } from "react-icons/io5";

const Chat = () => {
   
    const [msgs ,setMsgs] = useState([

        {name:"p1",msg:"p1 1 msg"},
        {name:"p2",msg:"p2  2 msg"},
        {name:"p1",msg:"p1  3 msg"},
        {name:"p2",msg:"p2 4 msg"},
        {name:"p2",msg:"p2 5 msg"},
    ])
    
    useEffect(()=>{
        setMsgs((prev)=>{
            return [...prev,{
                name:"p2",
                msg:"p1 dawdaw dawdawda wdawd waqdawqf segff eawq fgaw awf awedwqad awdawd ascascaw final dawdaw dawdawda wdawd waqdawqf segff eawq fgaw awf awedwqad awdawd ascascaw final dawdaw dawdawda wdawd waqdawqf segff eawq fgaw awf awedwqad awdawd ascascaw finaldawdaw dawdawda wdawd waqdawqf segff eawq fgaw awf awedwqad awdawd ascascaw finaldawdaw dawdawda wdawd waqdawqf segff eawq fgaw awf awedwqad awdawd ascascaw final   msg"
            }]
        })
    },[])

    

  return (
      <div style={{ width: "100%", height: "80vh", backgroundColor: "" }}>
        <Container  style = {{height:"10%",marginBottom:"10px",backgroundColor:""}}>
            <Card>
                <Card.Body className='header_font'>
                    Susmita
                    <br></br>
                    {Date.now()}
                    </Card.Body>
               
            </Card>
        </Container>
        <br></br>
          <div style={{ height: "92%", overflowY:"scroll" , backgroundColor: "" }}>


          <ul>
             
          {
                msgs.map((x)=>{
                    if(x.name === "p1"){
                       return <li style={{display:""}}> <div style = {{width:"100%",marginBottom:"10px",display:"flex", justifyContent:"flex-end"  }} >
                         
                          <div style = {{width:"100px"}}>
                              
                          <Card>
                            <Card.Header>{x.name}</Card.Header>
                            <Card.Body>{x.msg}</Card.Body>
                          </Card>

                          </div>
                         
                        </div></li>
                    }else{
                       return <li style={{display:""}}> <div style = {{width:"100%",marginBottom:"10px",display:"flex", justifyContent:"flex-start"  }} >
                         
                         <div style = {{width:"40%"}}>
                              
                         <Card>
                            <Card.Header>{x.name}</Card.Header>
                            <Card.Body>{x.msg}</Card.Body>
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
                <Form.Control style = {{width:"70%",height:"50px"}} type='text' ></Form.Control>
                <Button variant = "success" style = {{width:"30%"}}><IoSend size={25} /></Button>
              </Form>
             
          </div>

      </div>
  )
}

export default Chat