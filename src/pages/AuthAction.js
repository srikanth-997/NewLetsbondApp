export const loggedInAction= (value)=>async dispatch=>{
    dispatch({
        type:'LOGGED_IN',
        payload:value
    })
}
export const loggedOutAction= (value)=>async dispatch=>{
    dispatch({
        type:'LOGGED_OUT',
       
    })
}