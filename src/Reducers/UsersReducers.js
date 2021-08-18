import { ADD_USERS } from "../AddAction/AddAction"

const initiaState ={
    users: [
        {
          name:" Prince Antwi",
          contact: "0572211378",
          location: "lapaz",
          id:"EIFJ2994303"
        }
      ]
}


let UsersReducers =(state = initiaState,action ) =>{

    switch(action.type){
        case ADD_USERS:
        return{...state, users:[...state.users, action.payload]}

default:
    return (state)
    }
}

export default UsersReducers