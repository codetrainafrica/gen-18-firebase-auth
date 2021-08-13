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


var UsersReducers =(state = initiaState,action ) =>{
    switch(action.type){
        case 'Add Contact':
        return(state)

default:
    return (state)
    }
}

export default UsersReducers