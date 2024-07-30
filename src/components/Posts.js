import axios from 'axios'
import React, { useState ,useEffect  } from 'react'
import { Card, Col, Modal, Row,Button } from 'react-bootstrap'
import { IoSend } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import {motion} from 'framer-motion';
import { FaComment } from "react-icons/fa6";



const Posts = ({profile_id}) => { 

    const [eventShow,setEvenshow] = useState(false);
    const [postList,setPostList] = useState([]);
    const [buttonFlag,setButtonFlag] = useState(true)
    const [clicked,setClick] = useState(false)


    const liking = async(post_id,profile_id,owner_id) => {


       
        try{
            const res = await axios.post("http://localhost:5000/findPost",{post_id:post_id,profile_id:profile_id,owner_id:owner_id})
            console.log(res,"<=========== like")
        }catch(e){
             console.log(e)
        }
         


    }
   
    
    useEffect(()=>{
         
        const getData = async() =>{

            try{
                const res = await axios.get("http://localhost:5000/all_post ");
                setPostList(res.data)
            }catch(e){
                console.log(e)
            }

        }

        getData();

    })



  return (


    <div className='horizontal mobile_height desc_font' style = {{width:"100%",marginBottom:"50px",overflowY:"scroll",padding:"8px",gap:""}} > 

           
            <Row>
                 
                 {
                    postList.map((x)=>{
                        return  <Col lg = {6} sm = {12} xs = {12} >
                        <Card  style = {{minHeight:"",margin:"0px 0px 15px 0px"}} > 
                              
                              <Card.Img src = {require("../pic.jpg")}></Card.Img>
                            <Card.Body style = {{display:"",flexDirection:"",justifyContent:""}}>
                                
                               <Card.Title>{x.desc}</Card.Title>
                               <Card.Text>{x.likes.length}</Card.Text>
                                
                            </Card.Body>
                               <Card.Footer className='desc_font' style = {{gap:"5px"}} > <Button disabled = { x.likes.includes( profile_id)? true:false }  onClick={e=>liking(x._id,profile_id,x.owner_id)} size="md"  variant ={ x.likes.includes( profile_id)? "outline-success":"success" }> <BiLike size = {20}/> </Button>
                               <Button className='header_font' style  ={{width:"auto",marginLeft:"8px"}} variant = "outline-success" >comments</Button>
                     
                                </Card.Footer>
                                   
                                  
                            </Card>
                         
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

export default Posts