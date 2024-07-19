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
  
  const [data,setData] = useState([])


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

    getData()
  


  },[])
  return (
      <>

<Navbar expand="lg" className="" style={{backgroundColor:"#baf7b5"}}>
      <Container className = "mobile_down header_font"  style={{backgroundColor:"#baf7b5"}}>
         <span className = "mobile_down header_font" style = {{fontSize:"30px"}}>Okaare.in</span>

      </Container>
    </Navbar>

     <p></p>
      <Container className='mobile_down' style = {{marginTop:"",height:"auto"}}>
     
    
    <Routes>
     
      <Route path = "/" element = {<Signin_Page/>} />
      <Route path = "/home" element = {<Home/>} />
    </Routes>
  
      </Container>
    

      </>
  );
}

export default App;
