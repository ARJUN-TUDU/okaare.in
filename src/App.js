import React from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Signin_Page from './pages/Signin_Page';
import {Routes,Route} from 'react-router-dom'
import Home from  './pages/Home'
import {  Nav,Navbar,NavDropdown, Row,Col,Container } from 'react-bootstrap';
import Login from './components/Login';
import Practice from './components/Practice';
import Admin from './pages/Admin';
import Chat from './components/Chat';


function App() {
  
  const [data,setData] = useState([]);

  const [myTitle,setMyTitle] = useState("Okaare");



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
   

      <Navbar expand="lg" className="" style={{backgroundColor:"#baf7b5",position:"",top:"",zIndex:""}}>
      <Container className = "mobile_width_max header_font"  style={{backgroundColor:"#baf7b5",position:"",top:"",padding:"10px 0px 10px 10px"}}>
      <span className = "mobile_width_max header_font" style = {{fontSize:"24px"}}>Okaare|<span style={{color:"green",fontSize:"24px"}}>ᱚᱠᱟᱨᱮ</span>.in</span>
      </Container>
      </Navbar>

     <p></p>
      <Container    style = {{marginTop:"",width:"",height:"auto"}} className='mobile_width_max' >
     
    
    <Routes>
     
      <Route path = "/" element = {<Signin_Page/>} />
      <Route path = "/home/:id" element = {<Home/>} />
      <Route path = "/msg/:sender/:receiver" element = {<Chat/>} />
      <Route path = "/admin" element = {<Admin/>} />


    </Routes>
  
      </Container>

     
    

      </div>
  );
}

export default App;
