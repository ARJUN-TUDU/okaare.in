import axios from 'axios'
import React, { useState ,useEffect  } from 'react'
import { Card, Col, Modal, Row,Button } from 'react-bootstrap'

const Posts = ({profile_id}) => { 

    const [eventShow,setEvenshow] = useState(false);
    const [postList,setPostList] = useState([]);
    const [buttonFlag,setButtonFlag] = useState(true)


    const liking = async(post_id,profile_id,owner_id) => {


       
        try{
            const res = await axios.post("http://localhost:5000/findPost",{post_id:post_id,profile_id:profile_id,owner_id:owner_id})
            console.log(res)
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


    <div className='horizontal mobile_height desc_font' style = {{width:"100%",marginBottom:"50px",overflowY:"scroll",padding:"5px",gap:"5px"}} > 

           
            <Row>
                 
                 {
                    postList.map((x)=>{
                        return  <Col lg = {6} sm = {12} xs = {12} >
                        <Card  style = {{minHeight:"180px"}} > 
                              <Card.Header>{x.name}</Card.Header>
                            <Card.Body style = {{display:"",flexDirection:"",justifyContent:""}}>
                                
                                 <div>
                                    <Card.Text><p className='desc_font'>{x.name}</p></Card.Text>
                                <hr></hr>
                              <p className='header_Font' style = {{fontWeight:"bold"}}  >   {x.desc}</p></div>
                                   

                                <p>{x.likes.length>0?x.likes.length:"0"}</p>
                                
                            </Card.Body>
                               <Card.Footer className='desc_font'> <Button disabled = { x.likes.includes( profile_id)? true:false }  onClick={e=>liking(x._id,profile_id,x.owner_id)} size = "sm" variant ={ x.likes.includes( profile_id)? "outline-success":"success" }> like </Button> </Card.Footer>
                                    
                                  
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