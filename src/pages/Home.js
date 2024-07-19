import React, { useState } from 'react'
import { Container,Accordion, Row ,Col, Button ,Form, Card,Tabs,Tab,Modal} from 'react-bootstrap'

const Home = () => {
   
    const[name,setName] = useState()
    const [result,setResult] = useState({
        name:"",
        place:"",
        code:""
    })
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const list = [
        { "name": "Alice Johnson", "place": "New York", "code": "NY001" },
        { "name": "Bob Smith", "place": "Los Angeles", "code": "LA002" },
        { "name": "Carol Davis", "place": "Chicago", "code": "CH003" },
        { "name": "David Wilson", "place": "Houston", "code": "HS004" },
        { "name": "Eve Brown", "place": "Phoenix", "code": "PH005" },
        { "name": "Frank Thomas", "place": "Philadelphia", "code": "PA006" },
        { "name": "Grace Taylor", "place": "San Antonio", "code": "SA007" },
        { "name": "Henry White", "place": "San Diego", "code": "SD008" },
        { "name": "Ivy Harris", "place": "Dallas", "code": "DA009" },
        { "name": "Jack Martin", "place": "San Jose", "code": "SJ010" },
        { "name": "Kathy Clark", "place": "Austin", "code": "AU011" },
        { "name": "Leo Lewis", "place": "Jacksonville", "code": "JA012" },
        { "name": "Mia Lee", "place": "Fort Worth", "code": "FW013" },
        { "name": "Noah Walker", "place": "Columbus", "code": "CO014" },
        { "name": "Olivia Hall", "place": "Charlotte", "code": "CH015" },
        { "name": "Paul Young", "place": "San Francisco", "code": "SF016" },
        { "name": "Quinn Allen", "place": "Indianapolis", "code": "IN017" },
        { "name": "Rachel King", "place": "Seattle", "code": "SE018" },
        { "name": "Sam Wright", "place": "Denver", "code": "DE019" },
        { "name": "Tina Scott", "place": "Washington", "code": "WA020" },
        { "name": "Uma Green", "place": "Boston", "code": "BO021" },
        { "name": "Vince Adams", "place": "El Paso", "code": "EP022" },
        { "name": "Wendy Nelson", "place": "Detroit", "code": "DE023" },
        { "name": "Xander Carter", "place": "Nashville", "code": "NA024" },
        { "name": "Yara Mitchell", "place": "Memphis", "code": "ME025","photo":"" }]

    const shows = function(){
          
         list.map((x)=>{
            if(x.name === name){
                setResult((prev)=>{
                    return {...prev,name:x.name,place:x.place,code:x.code}
                })
            }
        })
            
         

    }
    const reload = function(){
        window.location.reload();
    }

    const clear = function(){
           
        setResult((prev)=>{
            return {...prev,name:"",place:""}
        })
        setName(null)

    }
    
    

    
  return (
 
        <div className='mb-5' style={{height:"100px",width:"100%",marginTop:"10px",backgroundColor:""}}>

            <Row>
                 
                 <Col lg = {4}  >
                  
                         
                         <Row>
                            <Col lg = {12} xs = {6} sm = {6}>
                               <div style = {{backgroundColor:"",width:"100%",height:"auto"}}>
                                       <img src = {require("../pic.jpg")} style = {{width:"100%",height:"100%",objectFit:"cover",borderRadius:"5px"}} />
                               </div>
                            </Col>
                            
                            <Col lg = {12} xs = {6} sm = {6}>
                               <p></p>
                                  <Card className='bg-white'  style = {{backgroundColor:""}}>
                                    <Card.Footer className='desc_font'>
                                        <span className='header_font'> Arjun Tudu</span>
                                        <p></p>
                                        Notifications : <span style = {{color:"green",fontWeight:"1000"}}> 0</span>
                                        <p></p>
                                        Matchings : <span style = {{color:"green",fontWeight:"1000"}}> 232
                                        </span>
                                        <p></p>
                                    </Card.Footer>
                                  </Card>
                               
                            </Col>
                         </Row>
                         <p></p>
                         
                         
                         <Card style = {{padding:""}}>
                            <Card.Header><p className='header_font'>Make a post</p></Card.Header>
                            <Card.Footer>
                                
                         <Form>
                                        <Form.Group className="mb-3" controlId="">
                                        
                                            <Form.Control type="text" placeholder="username" />
                                        
                                        </Form.Group>
                                        <Form.Control type="file" placeholder="username" />

                                       
                                        <p></p>
                                        
                                        <Button size = "sm" variant = "success"  className=' mt-3 header_font button_view_change mobile_view_full' style = {{width:"100%"}} type="submit">
                                            Submit
                                        </Button>
                                        
                        </Form>
                   
                            </Card.Footer>
                         </Card>

                 
                                    
                                    
                 </Col>
                                    <Col lg = {8} style={{backgroundColor:"",height:"auto"}} >
                                    
                                    <div className='mobile_view_up' style = {{backgroundColor:"",width:"100%"}}  >
                                    <Tabs
                                                                defaultActiveKey="Posts"
                                                                color='green'
                                                                id="uncontrolled-tab-example"
                                                                className="mb-3"
                                                                style = {{border:"",position:"",zIndex:"1",padding:"9px",color:"green",backgroundColor:"#baf7b5",borderRadius:"5px",height:"auto"}}
                                                                >
                                                                <Tab style = {{}} eventKey="Posts" title="Posts">
                                                                <div className='mobile_height' style = {{width:"100%",marginBottom:"100px",height:"70vh",border:" ",overflowY:'scroll',overflowX:"hidden",paddingRight:""}}>
                                                    
                                                            

                                                    {result.name.length<=0?<>{
                    <Row>
                                                            {
                                                                list.map((x)=>{
                                                                    return <Col  lg = {6} sm = {6}><Card style = {{marginBottom:"",height:"",backgroundColor:""}}>
                                                                       
                                                                    <Card.Header className='header_font' style = {{padding:""}}><p style = {{marginTop:""}}>{x.name}
                                                                    </p></Card.Header>
                                                                    
                                                                    <Card.Body className='desc_font'>
                                                                    <Card.Img src ={require("../pic.jpg")}></Card.Img>
                                                                          <p></p>
                                                                         <p style = {{fontSize:"10px"}}>  This HTML file is a template.
                                                                         If you open it directly in the browser, you will see an empty page.</p>

                                                                           <div style = {{width:"100%",height:"auto",padding:""}} >
                                                                           <Modal  style ={{padding:""}} size='sm' centered show={show} onHide={handleClose}>
                                                                            <Modal.Header closeButton>
                                                                            <Modal.Title  >
                                                                                
                                                                              comment
                                                                            </Modal.Title>
                                                                            </Modal.Header>
                                                                            <Modal.Body>
                                                                                 
                                                                                
                                                                                 <div style = {{maxHeight:"50vh",overflowY:"scroll"}}>
                                                                                     
                                                                                      {
                                                                                        list.map((x)=>{
                                                                                            return <p style = {{marginBottom:"15px"}}> 
                                                                                                
                                                                                                  {x.place}
                                                                                                <hr></hr>
                                                                                                  </p>
                                                                                        })
                                                                                      }


                                                                                 </div>
                                                                                

                                                                                


                                                                            </Modal.Body>
                                                                            <Modal.Footer>
                                                                              <div style = {{width:"100%",display:"flex",gap:"5px"}}>
                                                                              <Form style = {{width:"70%"}}>
                                                                                    <Form.Control placeholder='typle your comment here . . . . . '></Form.Control>
                                                                        
                                                                                </Form>
                                                                            <Button className=" header_font button_view_change  "style = {{width:"30%"}} variant="success" onClick={handleClose}>
                                                                                submit
                                                                            </Button>

                                                                            
                                                                              </div>
                                                                              <hr></hr>
                                                                              <Button  className=" header_font button_view_change  "style = {{width:"100%"}} variant="outline-danger" onClick={handleClose}>
                                                                                close
                                                                            </Button>
                                                                            </Modal.Footer>
                                                                        </Modal>

                                                                           </div>
                                                                    </Card.Body>
                                                                    <Card.Footer>
                                                                    <div style={{width:"100%",backgroundColor:"",display:"flex",gap:""}}>
                                                                        <p></p>

                                                                    <Button className=" header_font button_view_change  " onClick={e=>setResult((prev)=>{
                                                                        return {...prev,name:x.name,place:x.place,code:x.code}
                                                                    })} style = {{width:"50%"}} variant='success' size= "sm">like</Button>
                                                                   
                                                                      <Button className=" header_font button_view_change  " onClick={handleShow} size = "sm" variant='outline-success' style = {{width:"50%",marginLeft:"5px"}} >comments</Button>
                                                                    </div>
                                                                    </Card.Footer>
                                                                    
                                                                </Card>
                                                                <p></p>
                                                                </Col> 
                                                                })
                                                            }

                                                            </Row>
                                                            }</>: <Card style={{padding:"10px"}}>
                                                            <Card.Header className='header_font'>{result.name}</Card.Header>
                                                            <Card.Body className='desc_font'>{result.place}
                                                            <p></p>
                                                            {result.code}
                                                            </Card.Body>

                                                            {
                                                            result.name.length>0?<><hr></hr><Button variant='outline-danger' style = {{width:"20%"}} size = "sm" onClick={clear}>Back</Button></>:<></>
                                                            }
                                                            </Card>}
                                                            </div>
                                            </Tab>
                                            <Tab eventKey="Events" title="Events" color='green'  >
                                                 
                                            </Tab>
                                            <Tab eventKey="Matches" color='green' title="Matches" >
                                               
                                            </Tab>
                                            <Tab eventKey="Groups" color='green' title="Groups" >
                                               
                                               </Tab>
                                            </Tabs>
                                
                 </div>

                 <div style = {{width:"100%"}} className='mobile_right'>
              
                 
                 </div>
                     

                 </Col>
                 
            </Row>

           
            <Button  style = {{width:"",position:"fixed",right:"0px",zIndex:"1"}} href='/home' variant="success" onClick={reload}>
                                                                                reload
                                                                            </Button>
                 
             
        </div>
    
  )
}

export default Home