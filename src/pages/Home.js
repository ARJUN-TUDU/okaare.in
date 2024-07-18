import React, { useState } from 'react'
import { Container, Row ,Col, Button ,Form, Card} from 'react-bootstrap'

const Home = () => {
   
    const[name,setName] = useState()
    const [result,setResult] = useState({
        name:"",
        place:"",
        code:""
    })

    const list = [
        {name:"arjun",code:"2982480924",place:"uttp"},
        {name:"baroon",code:"654654",place:"maniktala"},
        {name:"robi",code:"arj43456456141",place:"bhadrakali"},
    
        {name:"suor",code:"5654654654",place:"jani na"},
        {name
            :"m bhai",code:"56454654",place:"station"},
        {name:"dj",
            code:"65465456454",place:"makhla"},
    ]

    const show = function(){
          
         list.map((x)=>{
            if(x.name === name){
                setResult((prev)=>{
                    return {...prev,name:x.name,place:x.place,code:x.code}
                })
            }
        })
            
         

    }

    const clear = function(){
           
        setResult((prev)=>{
            return {...prev,name:"",place:""}
        })

    }
    
    

    
  return (
 
        <div className='' style={{height:"100px",width:"100%",marginTop:"50px",backgroundColor:""}}>

            <Row>
                 
                 <Col lg = {4} style={{backgroundColor:"",height:"auto"}} >

                  <div style = {{width:"100%",height:"auto"}}>


                         <div style = {{backgroundColor:"white",width:"100%",borderRadius:"10px",padding:"15px",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
                          <Form>


                          <Form.Control onChange={e=>setName(e.target.value)} placeholder='name' size='sm'></Form.Control>
                          <hr></hr>
                           <p style = {{fontWeight:"",fontSize:"12px",opacity:"0.8"}}>put your thoughts here</p>
                          <Button onClick={show} variant = "outline-success" size = "sm" style = {{fontWeight:"bolder"}}>Search</Button>
                          </Form>
                          <p></p>
                      </div>        
                        
                    </div>
                 
                 </Col>
                 <Col lg = {8} style={{backgroundColor:"",height:"auto"}} >

                 <div className='mobile_view_up' style = {{backgroundColor:"",width:"100%"}}  >
                                
                                <div style = {{width:"40%"}}>
                                     
                                {result.name.length<=0?<div></div>: <Card>
                                    <Card.Header>{result.name}</Card.Header>
                                    <Card.Body>{result.place}
                                        <hr></hr>
                                        {result.code}
                                    </Card.Body>
                                    
                                </Card>}
                                </div>
                 </div>
              
                 {
                    result.name.length>0?<><hr></hr><Button size = "sm" onClick={clear}>Clear</Button></>:<></>
                 }
                     

                 </Col>

            </Row>
             
        </div>
    
  )
}

export default Home