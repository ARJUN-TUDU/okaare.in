import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Chat = () => {
   
    

  return (
      <div style={{ width: "100%", height: "100vh", backgroundColor: "" }}>
          <div style={{ height: "70%", backgroundColor: "" }}></div>   <div style={{ height: "30%" }} >
              
              <Form style = {{display:"flex",gap:"5px",padding:"15px 2px 15px 2px"}}>
                <Form.Control style = {{width:"70%"}} type='text' ></Form.Control>
                <Button style = {{width:"30%"}}>Submit</Button>
              </Form>
          </div>
      </div>
  )
}

export default Chat