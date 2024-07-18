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
 
        <div className='' style={{height:"100px",width:"100%",marginTop:"50px",backgroundColor:""}}>

            <Row>
                 
                 <Col lg = {4} style={{backgroundColor:"",height:"auto"}} >

                  <div style = {{width:"100%",height:"auto"}}>


                         <div style = {{padding:"0px",}}>
                            <Card>
                                
                                <Card.Header style = {{padding:"15px"}}>
                                         <Form >
                                            <Form.Control type = "file" ></Form.Control>
                                            <p></p>
                                        <Form.Control onChange={e=>setName(e.target.value)} placeholder='search . . .' size='sm'></Form.Control>
                                        <p></p>

                                        <div style = {{width:"100%"}} className='mobile_right'>

                                        <Button onClick={show} variant = "outline-success" size = "sm" style = {{fontWeight:"bolder"}}>Search</Button>

                                        </div>
                                        </Form></Card.Header>

                            </Card>
                            <p></p>

                                 <Card>
                                   
                            <Card.Body  style = {{padding:"15px"}}>

                           <Card.Header><span className='header_font'>Arjun Tudu</span></Card.Header>

                            <Card.Footer> 0 requests 
                                <p></p>
                                0 matches
                                 </Card.Footer>
                                    
                                    
                                    </Card.Body>

                                    </Card>
                          <p></p>
                      </div>        
                        
                    </div>
                   
                 
                 </Col>
                 <Col lg = {8} style={{backgroundColor:"",height:"auto"}} >
                 
                 <div className='mobile_view_up' style = {{backgroundColor:"",width:"100%"}}  >
                                
                                <div style = {{width:"100%",height:"70vh",border:" ",overflowY:'scroll',overflowX:"hidden",paddingLeft:"20px",paddingRight:"20px"}}>
                                     
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
                 </div>

                 <div style = {{width:"100%"}} className='mobile_right'>
              
                 
                 </div>
                     

                 </Col>

            </Row>
             
        </div>
    
  )
}

export default Home