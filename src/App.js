import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Signin_Page from './pages/Signin_Page';
import {Routes,Route} from 'react-router-dom'
import Home from  './pages/Home'
import {  Nav,Navbar,NavDropdown, Row,Col,Container,Button, Form ,Card } from 'react-bootstrap';
import Login from './components/Login';
import Practice from './components/Practice';
import Admin from './pages/Admin';
import { Avatar, Box, Drawer } from '@mui/material';

import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  
  const [data,setData] = useState([]);
  const [showDrawer,setShowDrawer] = useState(false)

  const [myTitle,setMyTitle] = useState("Okaare");
  const texts = ["ᱚᱠᱟᱨᱮ", "Okaare"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % texts.length);
        setFade(true); // Start fade in
      }, 5000); // Duration of fade out
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index]);

  useEffect(()=>{
        
    const getData = async() =>{
      try{
        const response = await axios.get("http://localhost:5000")
        console.log(response)
         setData(response.data)
       }catch(e){
        console.log(e)
       }
    }

    
 
  


  },[])
  return (
      <div className='margin_bottom' style = {{width:""}}>
   

      <Navbar expand="lg" className="" style={{backgroundColor:"white",position:"fixed",width:"100%",top:"0",zIndex:"1"}}>
      <Container className = "mobile_width_max header_font"  style={{backgroundColor:"white",gap:"10px",position:"",display:"flex",justifyContent:"flex-start",top:"",padding:"10px 0px 10px 10px"}}>
    
   <GiHamburgerMenu onClick = {e=>setShowDrawer(true)} className = "show_in_mobile" size = {30}/>
   <span className = " header_font" style = {{fontSize:"24px",fontWeight:"1000",color:"GREEN",marginLeft:"15px",}}> {currentText} <span style={{color:"#3b0075",fontWeight:"bold",fontSize:"24px"}}></span>.in</span>
      </Container>
     
      </Navbar>

      
      <Drawer sx = {{width:""}} open={showDrawer} onClose={e=>setShowDrawer(false)}>
      <Box sx = {{width:"280px",padding:"15px 15px 0px 15px"}}> 
               
           
              
              <div style = {{width:"100%",marginTop:"5%",textAlign:""}} >
              <Avatar src = {require("./pic2.jpg")} style = {{height:"150px",width:"150px",marginBottom:"50px",marginLeft:"18%"}} />
                  <Form>
                     <Form.Control placeholder = "search for people"></Form.Control>
                  </Form>
                  <p></p>
                  <Button variant = "outline-success" style = {{width:"50%"}}>Submit</Button>
              </div>

                        
        
        
          </Box>
          <hr></hr>
      </Drawer>
    

     <p></p>
      <Container    style = {{width:"",height:"auto"}} className='mobile_width_max mobile_margin_top' >
     
    
    <Routes>
     
      <Route path = "/" element = {<Signin_Page/>} />
      <Route path = "/home/:id" element = {<Home/>} />
 
      <Route path = "/admin" element = {<Admin/>} />


    </Routes>
  
      </Container>

     
    

      </div>
  );
}

export default App;
