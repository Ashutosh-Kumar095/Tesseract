let initState={
    token:''
}

export const loginReducer=(state=initState,action)=>{
 if(action.type==='LOGIN')
 {
     return ({...state,token:action.data})
 }
 else
    return state
}
