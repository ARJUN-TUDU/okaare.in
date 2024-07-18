import React, { useState } from 'react'
import { Container, Row ,Col, Button ,Form, Card,Tabs,Tab} from 'react-bootstrap'

const Home = () => {
   
    const[name,setName] = useState()
    const [result,setResult] = useState({
        name:"",
        place:"",
        code:""
    })

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
        setName(null)

    }
    
    

    
  return (
 
        <div className='mb-5' style={{height:"100px",width:"100%",marginTop:"10px",backgroundColor:""}}>

            <Row>
                 
                 <Col lg = {4} style={{backgroundColor:"",height:"auto"}} >

                  <div style = {{width:"100%",height:"auto"}}>


                         <div style = {{padding:"0px"}}>
                            <Row>
                           <Col lg = {12} sm = {6}>


                          <div className='mobile_flex' style={{width:"100%",gap:"5px"}}>
                              
                          <Card style = {{backgroundColor:"",display:"",width:"100%",padding:""}}>
                                   
                                  
                                  
                                  <Card.Img style={{height:"100%",width:"100%",objectFit:"cover",borderRadius:"5px"}} sizes='sm' variant="top" src={require("../pic.jpg")} />
                                       
                                                               
                                   
                                                              
                        </Card>
                        <p></p>
                        <Card style = {{backgroundColor:"green",display:"",color:"white",width:"100%",padding:"5px"}}>
                                   
                                  
       
                                  <Card.Header  style = {{backgroundColor:"green"}} ><span className='header_font'>Arjun Tudu</span></Card.Header>
                                 
                                   <Card.Footer style={{width:"100%",backgroundColor:"green"}} className=''> 0 requests 
                                       
                                       <p></p>
                                       0 matches
                                       <p></p>
                                       <Button className='bg-white' style = {{width:"100%",backgroundColor:""}} size ="sm" variant = "outline-success"> Profile</Button>      
                                        </Card.Footer>
                                                               
                                                               
                                                                                         
                                                              
                        </Card>

                          </div>
                           </Col>
                            
                            <p></p>
                            <Col lg = {12} sm ={6}>
                            <Card style = {{backgroundColor:""}}>
                                
                                <Card.Header style = {{padding:"15px"}}>
                                    <span className='header_font'> Make a post</span>
                                    <hr></hr>
                                         <Form >
                                            <Form.Control type = "file" ></Form.Control>
                                            <p></p>
                                        <Form.Control onChange={e=>setName(e.target.value)} placeholder='make a post . . .' size='sm'></Form.Control>
                                        <p></p>

                                        <div style = {{width:"100%"}} className='mobile_right'>

                                        <Button onClick={show} variant = "success" size = "sm" style = {{fontWeight:"bolder",width:"100%"}}>Post</Button>

                                        </div>
                                        </Form>
                                </Card.Header>

                            </Card>
                            </Col>
                            </Row>

                              
                                            <p></p>
                                        </div>        
                                            
                                        </div>
                                    
                                    
                                    </Col>
                                    <Col lg = {8} style={{backgroundColor:"",height:"auto"}} >
                                    
                                    <div className='mobile_view_up' style = {{backgroundColor:"",width:"100%"}}  >
                                    <Tabs
                                                                defaultActiveKey="Posts"
                                                                color='green'
                                                                id="uncontrolled-tab-example"
                                                                className="mb-3"
                                                                style = {{border:"",padding:"9px",color:"green",backgroundColor:"#baf7b5",borderRadius:"5px"}}
                                                                >
                                                                <Tab eventKey="Posts" title="Posts">
                                                                <div style = {{width:"100%",height:"100vh",marginBottom:"100px",border:" ",overflowY:'scroll',overflowX:"hidden",paddingLeft:"0px",paddingRight:""}}>
                                                    
                                                            

                                                    {result.name.length<=0?<>{
                    <Row>
                                                            {
                                                                list.map((x)=>{
                                                                    return <Col  lg = {6} sm = {6}><Card style = {{marginBottom:"15px"}}>
                                                                    <Card.Header className='header_font' style = {{padding:"10px"}}><p>{x.name}
                                                                    </p></Card.Header>
                                                                    <Card.Body className='desc_font'><span style = {{fontWeight:"bold",color:"green"}}> {x.code}</span>
                                                                        <hr></hr>
                                                                        <p>{x.place}</p>
                                                                    <div style={{width:"100%",textAlign:"right"}}>
                                                                        <p></p>

                                                                    <Button onClick={e=>setResult((prev)=>{
                                                                        return {...prev,name:x.name,place:x.place,code:x.code}
                                                                    })} style = {{width:"100%"}} variant='success' size= "sm">Show</Button>

                                                                    </div>
                                                                    </Card.Body>
                                                                    
                                                                </Card>
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
                                            </Tabs>
                                
                 </div>

                 <div style = {{width:"100%"}} className='mobile_right'>
              
                 
                 </div>
                     

                 </Col>

            </Row>
             
        </div>
    
  )
}

export default Home