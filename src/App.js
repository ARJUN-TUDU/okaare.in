import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Signin_Page from './pages/Signin_Page';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import { Container ,Nav,Navbar,NavDropdown } from 'react-bootstrap';

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

    <Container fluid style = {{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",height:"10vh",backgroundColor:"#baf7b5"}} >
        <div className='mobile_down'>
          
        <Navbar expand="lg"  style={{backgroundColor:"#baf7b5"}}>
            <Container>
              <span className='header_font' style = {{fontSize:"19px" , color:"green"}}>Okaare.in</span>
             
            </Container>
          
          </Navbar>
              </div>
              
    </Container>


  
      <Container className='mobile_down' style = {{marginBottom:"100px",height:"auto"}}>
     
    
    <Routes>
      <Route path = "/" element = {<Signin_Page/>} />
      <Route path = "/home" element = {<Home/>} />
    </Routes>
  
      </Container>
    

    </>
  );
}

export default App;
