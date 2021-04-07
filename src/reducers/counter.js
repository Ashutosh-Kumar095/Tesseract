let initState={
    counter:0,
}
  
  const counter=(state=initState,action)=>{
    switch(action.type){
      case 'INCREMENT':
        return state
      case 'DECREMENT':
        return { ...state, counter:state.counter-1 }
      default:
        return state;  
    }
  }

  export default counter;
