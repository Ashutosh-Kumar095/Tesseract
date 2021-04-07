import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import ReactChild from './reactChild';
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './loginForm';
import { useCookies } from 'react-cookie';
import Tesseract from './tesseract';
import { Alert } from 'react-bootstrap';


function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const tokenPayload=useSelector(state=>state.loginReducer);
  const [errorInd,setErrorInd]=useState({errorFlag:false,errorMsg:''})
  
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
    console.log('-------->',tokenPayload.token);
    if(tokenPayload.token.status===200)
    {
      console.log('--------->',tokenPayload.token.data.token);
      setLoggedIn(true);
      setCookie('token',tokenPayload.token.data.token);
    }
    else if(tokenPayload && tokenPayload.token && tokenPayload.token.data && 
      tokenPayload.token.data.errorMessage)
    {
      setLoggedIn(false);
      setErrorInd({errorFlag:true,errorMsg:tokenPayload.token.data.errorMessage})
    }
  },[
    tokenPayload
  ])
  const closeToast=()=>{
    console.log('here');
    setErrorInd({errorFlag:false,errorMsg:''})
  }
  return (
    <>
    {
      errorInd.errorFlag && 
    <Alert variant="danger" style={{textAlign:'center'}} dismissible onClose={closeToast}>
    {errorInd.errorMsg}
  </Alert>
  }
    <div className="App-header">
    {
     loggedIn && 
     <Tesseract/>
     ||
     <LoginForm/>
    }
    </div>
    </>
  )
}

export default App;
