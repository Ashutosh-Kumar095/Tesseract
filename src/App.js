import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import ReactChild from './reactChild';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './action/actions';

function App() {
  const counter=useSelector(state=>state.counter)
  const [mount,setMount]=useState(false);
  const dispatch=useDispatch();
  const mountChild=()=>{
    console.log('---->',counter);
    console.log('clicked');
    setMount(true);
  }
  // useEffect(()=>{
  //   console.log('counter is--->',counter);  //use specifically to detect a state change and set some state
  //   console.log('mount is---->',mount);
  // },[counter.counter])
  return (
    <div className="App">
      <h3>Testing React Reducer with a count {counter.counter}.</h3>
      <br/>
      <button onClick={()=>{
        dispatch({type:'INCREMENT'})
      }}>+</button>
      <button onClick={()=>{
        dispatch({type:'DECREMENT'})
      }}>-</button>
      </div>
  );
}

export default App;
