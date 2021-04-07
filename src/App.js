import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import ReactChild from './reactChild';
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './loginForm';
import { useCookies } from 'react-cookie';
import Tesseract from './tesseract';


function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const tokenPayload=useSelector(state=>state.loginReducer);
  useEffect(()=>{
    if(!cookies.token)
    {
      console.log('in if');
      setLoggedIn(false)
    }
    else
    {
      console.log('in else');
      setLoggedIn(true)  
    }
      
  },[])
  useEffect(()=>{
    console.log('api resp');
    if(tokenPayload.token.status===200)
    {
      console.log('--------->',tokenPayload.token.data.token);
      setLoggedIn(true)
      setCookie('token',tokenPayload.token.data.token);
    }
  },[
    tokenPayload
  ])
  return (
    <>
    {
     loggedIn && 
     <Tesseract/>
     ||
     <LoginForm/>
    }
    </>
  )
}

export default App;
