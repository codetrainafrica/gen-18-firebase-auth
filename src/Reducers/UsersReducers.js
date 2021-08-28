import { ADD_USERS } from "../AddAction/AddAction"
import { DELETE_USER } from "../AddAction/AddAction"
import { EDIT_USER } from "../AddAction/AddAction"

const initiaState ={
    users: [
        {
          name:" Prince Antwi",
          contact: "0572211378",
          location: "lapaz",
          id:"w4fwufu2i2"
        }
      ]
}


let UsersReducers =(state = initiaState,action ) =>{

    switch(action.type){
        case ADD_USERS:
        return{...state.users, users:[...state.users, action.payload]}
        case DELETE_USER:
        let undeleted = state.users.filter((user) => user.id !== action.payload)
       return {...state,users:undeleted}
       case EDIT_USER:
         const newUser = state.users.map((users)=> users.id === action.payload.id ? action.payload : users )
        return{...state, users : newUser}
default:
    return (state)
    }
}

export default UsersReducers