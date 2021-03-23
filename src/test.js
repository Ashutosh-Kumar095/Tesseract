import React from 'react';

export default class Test extends React.Component
{
    constructor()
    {
     super();
     this.stateSave={
         buttonArray:[],
         uniquePayload:[],
         previousPayload:[]
     }
        
    }
    differentiator=()=>{

    }
    render()
    {
        return <h3>Child mounted .</h3>
    }
    
}
