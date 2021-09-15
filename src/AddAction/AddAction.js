export const ADD_USERS = "ADD_USERS"
export const DELETE_USER = "DELETE_USER"
export const EDIT_USER = "EDIT_USER"

export const AddAction =(user)=>{

    return(dispact,state,{getFirestore})=>{
        getFirestore()
        .collection('contact')
        .add(user)
        .then((docs)=>{
            console.log(docs)
        })
    }
return{
    type: ADD_USERS,
    payload: user
}
}
export const deleteUser =(user_id)=>{
    return{
        type: DELETE_USER,
        payload: user_id
    }
    }
    export const editUser =(updatedcontct)=>{
        return{
            type: EDIT_USER,
            payload: updatedcontct
        }
        }