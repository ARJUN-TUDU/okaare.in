import React, { useEffect, useState } from 'react'
import { Container,Accordion, Row ,Col, Button ,Form,Tabs,Tab,Modal,Card} from 'react-bootstrap'
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
import Posts from '../components/Posts';
import Matching from '../components/Matching';




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

  const [showProfile,setShowProfile] = useState(false);
  const [firstModal,setFirstModal] = useState(false);
  const [firstEvent,setFirstEvent] = useState()
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
    date:"",
  
   });
   const [post,setPost] = useState({
    owner_name:"",
    
    owner_id:params.id,
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
    const liking = async (post_id,person_id)=>{
        
       try{
          const res = await axios.post("http://localhost:5000/findPost",{post_id:post_id,person_id:person_id,owner_id:post.owner_id})
          console.log(res);
          
       }catch(e){}

       window.location.reload()

    }

    useEffect(()=>{

        console.log(params.id,"=========")
        
        setFirstModal(true)
     
        const showsf = async function(){
          
          try{

           const res = await axios.get("http://localhost:5000/persons");
           const resPost = await axios.get("http://localhost:5000/all_post");
           const resEvent = await axios.get("http://localhost:5000/get_events")
           console.log(resPost.data,"<===========postssssss");

           if(resEvent){
              
            setFirstEvent(resEvent.data.reverse().slice(0,3)[0].name)
           }
           
           
          await res.data.map((x)=>{

              if(x._id === params.id){
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
 
       <div>
          <Row>
             <Col lg = {4} xs = {12} >
              <div className=' full_view'>
                 <Row>

                 

                    <Col style = {{margin:""}} lg = {12} xs = {6} sm ={6} >
                    <div className='  full_view'>
                       
                         <Card style = {{borderRadius:"5px"}}>
                                
                             
                                <Card.Img src = {require("../pic2.jpg")} ></Card.Img>
                              
                         </Card>

                    </div>
                    </Col>
                    <Col style = {{margin:""}}  lg = {12} xs = {6} sm ={6} >

                       <Card> 
                       
                          <Card.Body>
                         
                          <p className='header_font' >Arjun Tudu</p>
                          <p></p>
                          
                          <div className='full_width' style= {{display:"flex"}} > 
                              
                              <div style = {{width:"50%"}} >
                                        <FaRegHeart size={20} style = {{color:"red"}} /> : 0 
                                <p></p>
                                  <FaRegHeart  size={20} /> : 0 
                                  <br></br>
                                  <p></p>
                              </div>

                              <div>
                                    <FaRegHeart  size={20}  style = {{color:"red"}} /> : 0 
                                <p></p>
                              <FaRegHeart  size={20} /> : 0 
                              <br></br>
                              <p></p>
                              </div>

                          </div>

                          </Card.Body>
                          
                         <Card.Footer> <div className='full_width' style = {{gap:"5px",display:"flex",justifyContent:"space-between"}} >
                         <Button style = {{width:"50%"}} size = "sm" className = "full_width header_font" variant = "outline-success">see more</Button>
                         <Button style = {{width:"50%"}} size = "sm" className = "full_width header_font" variant = "success">edit profile</Button>

                         </div></Card.Footer>



                       </Card>
                         
                    </Col> 
                    
                    



                  </Row>
                       
                  <Card style = {{padding:"",backgroundColor:"",marginTop:"8px",borderRadius:"",padding:"8px"}}>
                           <Card.Body>
                                  <p className='header_font ' style={{color:""}}>Make a Post</p>
                         <Form>
                                       
                                        <Form.Control type="file" placeholder="username" />
                                        <Form.Group className="mb-3" controlId="">
                                        <br></br>
                                        <Form.Control onChange = {e=>setPost((prev)=>{
                                          return {...prev,desc:e.target.value}
                                        })} style = {{height:"50px"}} type="text" placeholder="username" />
                                    
                                    </Form.Group>

                                       
                                        <p></p>
                                        
                                        <Button onClick = {e=>sendPost()} size = "sm" variant = "success"  className='full_width mt-3 header_font button_view_change mobile_view_full' style = {{width:"100%"}} type = "submit" >
                                            Upload
                                        </Button>
                                        
                        </Form>
                           </Card.Body>
                         </Card>

              </div>
             </Col>
             
             <Col lg = {8} xs = {12} >
                          <div className='full_view'>
                          <Tabs
                                                                defaultActiveKey="Posts"
                                                                color='green'
                                                                id="uncontrolled-tab-example"
                                                                className="mb-3"
                                                                style = {{border:"",position:"",zIndex:"1",padding:"9px",color:"white",backgroundColor:"green",borderRadius:"5px",height:"auto"}}
                                                                >
                                          
                                            <Tab eventKey="Posts" title="Posts" color='white' style = {{color:"white"}} >
                                                 <Posts profile_id = {params.id} />
                                            </Tab>
                                                              
                                            <Tab eventKey="Events" title="Events" color='white'  >
                                                 <Events profile_id = {params.id} />
                                            </Tab>
                                            <Tab eventKey="Matching" title="Matching" color='white'  >
                                                 <Matching profile_id = {params.id} />
                                            </Tab>
                                            
                                            </Tabs>
                            
                          </div>
             </Col>

          </Row>


        
       </div>
    
  )
}

export default Home