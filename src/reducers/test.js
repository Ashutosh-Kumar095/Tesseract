const test=(state='hi',action)=>{
    if(action.type==='CHANGE')
        return 'hello'
    return state;    
}

export default test;
