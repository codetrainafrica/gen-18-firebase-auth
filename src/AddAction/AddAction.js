export const ADD_USERS = "ADD_USERS"

export const AddAction =(user)=>{
return{
    type: ADD_USERS,
    payload: user
}
}