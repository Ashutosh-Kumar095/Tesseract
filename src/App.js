import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child.js';
import Test from './test'
import axios from 'axios';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      mockPayload:{button:'Submit',payload:{a:'2',b:'3',c:'1'}}
    }
    this.clickCount=0;
  }

  componentDidMount(){
    console.log('starting');
    axios.get('http://localhost:5000/',{
      headers:{
        'x-auth-token':'7ec4c46d39bc8e149368c5b90975624582bffd6cfc796487de8682745427ff79368a850a9fb8bd7a96f29978bb35a774OoGNUOmf2Pck5xXStGVzbQm/DbzPDGAJT3tHhx2GSW1PZU5GgNWwxMECTXGKyGDOFw2brfZ7qsfeKPqT2u35YJjCSdfsvwVE5I+fRbzpp4nLfFVGrYgcIk2oHakIhzpjsgZBKj1U34dDF3/USViXSMSkChH2F6QhReZP76G0cRM8kGGNCLTpSTVchypPb9SKw7W1NVXUJaIudt01QDpTASTd0fryfUYJPa06J5Iso48FqC3k+SDRbQPTahGvRXgQ'
      }
    }).then((res)=>{
      console.log('res--->',res);
    })
  }

  changePayload=()=>{
    if(this.clickCount===1)
    {
      this.setState({mockPayload:{button:'back',payload:{a:'2',b:'3',c:'1'}}})
    }
    if(this.clickCount===2)
    {
      this.setState({mockPayload:{button:'Add new data',payload:{a:'2',b:'3',c:'1'}}})
    }
  }
  
  
  render()
  {
    
    
    return(
      <>
     <Test/>
     <br/>
     <button onClick={this.changePayload}>change</button>
     </>
    )
  }
}

export default App;
 