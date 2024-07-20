import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Signin_Page from './pages/Signin_Page';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import { Container ,Nav,Navbar,NavDropdown, Row,Col } from 'react-bootstrap';
import Login from './components/Login';
import { IoHomeOutline } from "react-icons/io5";
import { SlRefresh } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
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
      <div style = {{marginBottom:"10vh"}}>
   

      <Navbar expand="lg" className="" style={{backgroundColor:"#baf7b5",position:"",top:"",zIndex:""}}>
      <Container className = "mobile_down header_font"  style={{backgroundColor:"#baf7b5",position:"",top:"",padding:"10px 0px 10px 10px"}}>
      <span className = "mobile_down header_font" style = {{fontSize:"24px"}}>Okaare|<span style={{color:"white",fontSize:"24px"}}>ᱚᱠᱟᱨᱮ</span>.in</span>
      </Container>
      </Navbar>

     <p></p>
      <Container className='mobile_down' style = {{marginTop:"",height:"auto"}}>
     
    
    <Routes>
     
      <Route path = "/" element = {<Signin_Page/>} />
      <Route path = "/home" element = {<Home/>} />
    </Routes>
  
      </Container>

      <div className = "mobile_show" style={{height:"8vh",backgroundColor:"",width:"100%",textAlign:"center",position :"fixed",bottom:"0"}}>
         <Container className='mobile_down bg-white' style = {{display:"",alignItems:"",paddingTop:""}}>
          <p></p>
           <Row>
             
             <Col  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><IoHomeOutline size = {30} /> </Col>
             <Col  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><IoSettingsOutline size = {30} /> </Col>
             <Col  className ="bg-pink desc font bold" style = {{fontWeight:"BOLD",color:"green",height:"auto"}} lg = {4} sm = {4} xs = {4}><SlRefresh size = {30} /> </Col>
             
           </Row>

         </Container>
      </div>
    

      </div>
  );
}

export default App;
