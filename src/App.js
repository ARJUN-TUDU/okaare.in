import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Signin_Page from './pages/Signin_Page';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import { Container ,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import Login from './components/Login';

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

      <Navbar expand="lg" className="" style={{backgroundColor:"#baf7b5"}}>
      <Container className = "mobile_down header_font"  style={{backgroundColor:"#baf7b5",padding:"10px 0px 10px 10px"}}>
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

      <div style={{height:"30vh",backgroundColor:""}}>
      </div>
    

      </div>
  );
}

export default App;
