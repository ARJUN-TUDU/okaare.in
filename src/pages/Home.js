import React, { useState } from 'react'
import { Container,Accordion, Row ,Col, Button ,Form, Card,Tabs,Tab,Modal} from 'react-bootstrap'
import { MdBroadcastOnHome } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
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

  const [showProfile,setShowProfile] = useState(false)
  const [setnot,setNoti] = useState(false);
  const [searchModal,setSearchModal] = useState(false)

  const refreshing = function(){
    window.scrollTo({top:0,behavior:"smooth"})
    console.log("clicked")
  }

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
    const searchModalChange = function(){
      setSearchModal(true)
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
                  
                         
                         <Row style = {{gap:""}}>
                            <Col lg = {12} xs = {6} sm = {6}>
                               <div style = {{backgroundColor:"",width:"100%",height:"100%"}}>
                                       <img src = {require("../pic.jpg")} style = {{width:"100%",height:"100%",objectFit:"cover",borderRadius:"5px"}} />
                                       
                               </div>
                            
                              
                            </Col>
                            
                            <Col lg = {12} xs = {6} sm = {6}>
                                    
                                  <Card className='bg-white'  style = {{backgroundColor:"",height:"100%"}}>
                                  <Card.Header><span className='header_font'> Arjun Tudu</span></Card.Header>
                                    <Card.Body className='desc_font' style = {{textAlign:"start",gap:"15px"}}>
                                       
                                       
                                       <IoNotificationsOutline color='green' size = {18} /> : <span style = {{color:"",fontWeight:"1000",fontSize:""}}> 0</span>
                                       
                                        <p></p>
                                        <FaRegHeart color = "red" size = {18}  /> : <span style = {{color:"",fontWeight:"1000",}}> 232
                                        </span>
                                         <p></p>
                                        <Button onClick={e=>setNoti(true)} style = {{width:"100%",color:""}} className='header_font' variant = "outline-success">Notifications</Button>
                                        
                                    </Card.Body>
                                    <Card.Footer><Button onClick={e=>setShowProfile(true)} style = {{width:"100%"}} className='header_font' variant = "success">Edit Profile</Button></Card.Footer>
                                  </Card>
                               
                            </Col>
                         </Row>
                         <p></p>
                         
                         
                         <Card style = {{padding:""}}>
                            <Card.Header><p className='header_font'>Make a post</p></Card.Header>
                            <Card.Footer>
                                
                         <Form>
                                        <Form.Group className="mb-3" controlId="">
                                        
                                            <Form.Control style = {{height:"50px"}} type="text" placeholder="username" />
                                        
                                        </Form.Group>
                                        <Form.Control type="file" placeholder="username" />

                                       
                                        <p></p>
                                        
                                        <Button size = "sm" variant = "success"  className=' mt-3 header_font button_view_change mobile_view_full' style = {{width:"100%",height:"35px"}} type="submit">
                                            Submit
                                        </Button>
                                        
                        </Form>
                   
                            </Card.Footer>
                         </Card>

                 
                                    
                                    
                 </Col>
                                    <Col lg = {8} style={{backgroundColor:"",height:"auto"}} >
                                    
                                    <div className='mobile_view_up desc_font' style = {{backgroundColor:"",fontSize:"11PX",width:"100%"}}  >
                                    <Tabs
                                                                defaultActiveKey="Posts"
                                                                color='YELLOW'
                                                                id="uncontrolled-tab-example"
                                                                className="mb-3"
                                                                style = {{border:"",position:"",zIndex:"1",padding:"9px",color:"green",backgroundColor:"#baf7b5",borderRadius:"5px",height:"auto"}}
                                                                >
                                                                <Tab style = {{}} eventKey="Posts" title="Posts">
                                                                <div className='mobile_height' style = {{width:"100%",marginBottom:"100px",border:" ",overflowY:'scroll',overflowX:"",paddingRight:""}}>
                                                    
                                                            

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
                                                                            <Modal.Body  style = {{maxHeight:"30vh",overflowY:"scroll"}}>
                                                                                 
                                                                                
                                                                                 
                                                                                     
                                                                                      {
                                                                                        list.map((x)=>{
                                                                                            return <p style = {{marginBottom:""}}> 
                                                                                                
                                                                                                  {x.place}
                                                                                                <hr></hr>
                                                                                                  </p>
                                                                                        })
                                                                                      }


                                                                                

                                                                                


                                                                            </Modal.Body>
                                                                            <Modal.Footer>
                                                                              <div style = {{width:"100%",display:"flex",gap:"5px"}}>
                                                                              <Form style = {{width:"70%"}}>
                                                                                    <Form.Control style = {{height:"80px"}} placeholder='typle your comment here . . . . . '></Form.Control>
                                                                        
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

            <Modal  style ={{padding:""}} size='sm' centered show={showProfile} onHide={e=>setShowProfile(false)}>
                                                                            <Modal.Header closeButton>
                                                                            <Modal.Title  >
                                                                                
                                                                              comment
                                                                            </Modal.Title>
                                                                            </Modal.Header>
                                                                               <Modal.Body> <Form className='desc_font' style = {{width:"90%"}}>
                                                                                Update your Profile Picture
                                                                                <p></p>
                                                                                <img src = {require("../pic.jpg")} style={{height:"100px" ,width:"100%",objectFit:"cover"}} />
                                                                                <p></p>
                                                                                    <Form.Control style = {{height:""}} type='file' placeholder='typle  comment here . . . . . '></Form.Control>
                                                                                    <p></p>
                                                                                    <p style = {{color:"green"}} className = "header_font">Arjun Tudu</p>
                                                                                    <Form.Control style = {{height:""}} type='text' placeholder='change your name'></Form.Control>
                                                                        
                                                                                </Form></Modal.Body>
                                                                            <Modal.Footer>
                                                                              <div style = {{width:"100%",display:"flex",gap:"5px"}}>
                                                                             
                                                                            <Button className=" header_font button_view_change  "style = {{width:"30%"}} variant="success" onClick={handleClose}>
                                                                                submit
                                                                            </Button>

                                                                            
                                                                              </div>
                                                                              <hr></hr>
                                                                              <Button onClick = {e=>setShowProfile(false)}  className=" header_font button_view_change  "style = {{width:"100%"}} variant="outline-danger" >
                                                                                close
                                                                            </Button>
                                                                            </Modal.Footer>
                                                                        </Modal>
            
            <Modal  centered show = {setnot} onHide={e=>setNoti(false)}>
                
                <Modal.Header closeButton>
                    <p className='header_font'> Notifications</p>
                </Modal.Header>

                <Modal.Body style = {{width:"",textAlign:"",maxHeight:"50vh",overflowY:"scroll"}}>
                     
                {
                                                                                        list.map((x)=>{
                                                                                            return <p style = {{marginBottom:""}}> 
                                                                                                
                                                                                                  {x.place}
                                                                                                <hr></hr>
                                                                                                  </p>
                                                                                        })
                                                                                      }


                </Modal.Body>

                <Modal.Footer>  <Button onClick = {e=>setNoti(false)}  className=" header_font button_view_change  "style = {{width:"100%"}} variant="outline-danger" >
                                                                                close
                                                                            </Button></Modal.Footer>

            

            </Modal>
            <Modal centered style = {{textAlign:"center"}} show = {searchModal} onHide={e=>setSearchModal(false)} >
                         <Modal.Header closeButton>Search</Modal.Header>
                        <Modal.Body><Form><Form.Control placeholder='type the name' ></Form.Control></Form>
                        <p></p>
                        <Button className = "header_font" variant = "success" style = {{width:"100%"}} >search</Button>

                         </Modal.Body>
                        

                  </Modal>

            <div className = "mobile_show bg-white" style={{height:"8vh",backgroundColor:"",width:"100%",textAlign:"center",position :"fixed",bottom:"0px"}}>
         <Container className='mobile_down' style = {{display:"",alignItems:"",padding:"",position:"fixed",bottom:"20px"}}>
          
           <Row>
             
             <Col onClick = {searchModalChange}  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><CiSearch  size = {25} /> </Col>
             <Col  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><FaPlus size = {30} /> </Col>
             <Col onClick={refreshing} className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"red",fontWeight:"bold",height:"auto"}} lg = {4} sm = {4} xs = {4}><SlRefresh size = {25} /> </Col>
             
           </Row>

         </Container>
      </div>
                   
             
        </div>
    
  )
}

export default Home