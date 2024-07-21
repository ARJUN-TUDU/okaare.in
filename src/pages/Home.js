import React, { useEffect, useState } from 'react'
import { Container,Accordion, Row ,Col, Button ,Form, Card,Tabs,Tab,Modal} from 'react-bootstrap'
import { MdBroadcastOnHome } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Events from '../components/Events';
import { useParams } from 'react-router-dom';
import { GoComment } from "react-icons/go";
import axios from 'axios';
import { SlLike } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
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
  const [searchModal,setSearchModal] = useState(false);
  const [buttonFlag,setButtonFlag] = useState(false);
 

  const refreshing = function(){
    window.scrollTo({top:0,behavior:"smooth"})
    console.log("clicked")
  }

  const params = useParams()
  console.log("params=>," ,params)

   const [postList,setPostList] = useState([])
   const[ personList,setPersonList] = useState([]);
  
   const [profile,setProfile] = useState({
    name:"",
    age:"",
    password:"",
    email:"",
    phone:"",
    profile_photo:"",
    photos:[],
    date:""
   });
   const [post,setPost] = useState({
    owner_name:"",
    owner_id:"",
    likes:[],
    comments:[],
    desc:"",
    photos:[],
    date:""
   })

   
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

    const sendPost = async() => {
        
       
        try{
          



          const res = await axios.post("http://localhost:5000/create_post",post);
          console.log(res)
        }catch(e){
          console.log(e)
        }
         


    }
    const liking = async (id,name)=>{
        
       try{
          const res = await axios.post("http://localhost:5000/findPost",{name:name,id:id})
          console.log(res);
          
       }catch(e){}

       window.location.reload()

    }

    useEffect(()=>{

        console.log(params.id,"=========")
     
        const showsf = async function(){
          
          try{

           const res = await axios.get("http://localhost:5000/persons");
           const resPost = await axios.get("http://localhost:5000/all_post");
           console.log(resPost.data,"<===========postssssss")
           
           
          await res.data.map((x)=>{

              if(x.name === params.id){
                console.log(x,"current value")
                setPost((prev)=>{
                  return {...prev,owner_name:x.name}
                })
                 setProfile((prev)=>{
                  return {...prev,name:x.name}
                 })
                 
              }
           })

           console.log(profile)
           console.log("--------------------------")
           console.log(post)
           setPersonList(res.data);
           setPostList(resPost.data);
          
          

          }catch(e){
           console.log(e);
          }
          
          
              

     

    }

    
  
    showsf();
    
  
  
  },[])
    
    

    
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
                                  <Card.Header><span className='header_font'></span>{profile.name}</Card.Header>
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
                                        
                                            <Form.Control onChange = {e=>setPost((prev)=>{
                                              return {...prev,desc:e.target.value}
                                            })} style = {{height:"50px"}} type="text" placeholder="username" />
                                        
                                        </Form.Group>
                                        <Form.Control type="file" placeholder="username" />

                                       
                                        <p></p>
                                        
                                        <Button onClick = {e=>sendPost()} size = "sm" variant = "success"  className=' mt-3 header_font button_view_change mobile_view_full' style = {{width:"100%",height:"35px",fontSize:"15px"}} type = "submit" >
                                            Upload
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
                                                                <Tab style = {{}} eventKey="Posts" title="Person">
                                                                <div className='mobile_height' style = {{width:"100%",marginBottom:"100px",border:" ",overflowY:'scroll',overflowX:"",paddingRight:""}}>
                                                    
                                                                <Row>
                                                            {
                                                                postList.map((x)=>{
                                                                       

                                                                    return <Col  lg = {6} sm = {6}><Card style = {{marginBottom:"",height:"auto",backgroundColor:""}}>
                                                                       
                                                                    <Card.Header className='desc_Font' style = {{padding:"",height:""}}>{ x.owner_name ? x.owner_name:"not maintioned" }
                                                                      <p></p>
                                                                      <p style = {{marginTop:"10px",fontWeight:"300"}}>
                                                                      
                                                                      
                                                                      {x.name}
                                                                    </p></Card.Header>
                                                                     
                                                                    <Card.Body style = {{height:"auto"}} className='header_font'>
                                                                       
                                                                         
                                                                         <p style = {{fontSize:"15px"}}>{x.desc}</p>

                                                                           <div style = {{width:"100%",height:"auto",padding:"",fontWeight:"200"}} >
                                                                           
                                                                               <AiOutlineLike/> : <span style = {{fontSize:"13px"}}>{x.likes.length}</span>
                                                                               <GoComment style = {{marginLeft:"5px"}}/> : {x.likes.length}
                                                                           </div>
                                                                    </Card.Body>
                                                                    <Card.Footer style = {{display:"flex",width:"100%",justifyContent:"",flexDirection:"",alignItems:"center",gap:'5px'}}>
                                                                  
                                                                        
                                                                          
                                                                        
                                                                        <div style={{height:""}}> <form>  <Button className=" header_font  "  onClick = {e=>liking(x._id,profile.name)}  disabled = {x.likes.includes(profile.name)?true:false}   style = {{width:"",color:""}} variant={x.likes.includes(profile.name)?"outline-secondary":"primary"} type = "submit" size= "sm"><AiOutlineLike  size = {16}/></Button></form>
                                                                        </div>
                                                                       
                                                                        <div style={{width:""}}> <form>  <Button className=" header_font  "    variant='success' type = "submit" size= "sm">comments</Button></form>
                                                                        </div>
                                                                    
                                                                 
                                                                    </Card.Footer>
                                                                    
                                                                </Card>
                                                                <p></p>
                                                                </Col> 
                                                                })
                                                            }

                                                            </Row>

                                                            </div>
                                            </Tab>
                                            <Tab eventKey="Events" title="Events" color='green'  >
                                                 <Events/>
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
                                                                                
                                                                              <p className='header_font' style = {{fontSize:"18px"}} > Edit Profile </p>
                                                                            </Modal.Title>
                                                                            </Modal.Header>
                                                                               <Modal.Body> <Form className='desc_font' style = {{width:"100%"}}>
                                                                                Update your Profile Picture
                                                                                <p></p>
                                                                               
                                                                               <div className='' style = {{width:"100%",textAlign:"center"}}>
                                                                                   
                                                                               <img src = {require("../pic.jpg")} style={{height:"150px" ,width:"150px",objectFit:"cover",borderRadius:"10px"}} />


                                                                               </div>
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
        <hr></hr>
         <div className='mobile_down' style = {{display:"",alignItems:"",padding:"",position:"fixed",border:"1px 0px 0px 0px solid",bottom:"20px"}}>
          
           <Row>
             
             <Col onClick = {searchModalChange}  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><CiSearch  size = {25} /> </Col>
             <Col  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><FaPlus size = {30} /> </Col>
             <Col onClick={refreshing} className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"red",fontWeight:"bold",height:"auto"}} lg = {4} sm = {4} xs = {4}><SlRefresh size = {25} /> </Col>
             
           </Row>

         </div>
      </div>
                   
             
        </div>
    
  )
}

export default Home