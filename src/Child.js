import React from 'react';

export default class Child extends React.Component
{
    constructor()
  {
    super();
    
  }
  child=()=>{
      console.log('this is child component');
  }
  render()
  {
    return(
      <>
      <h1>Child Component</h1>
      </>
    )
  }
}