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
        export const getALLcontact=()=>{
            return(dispatch,state,{getFirestore})=>{
              getFirestore().collection('contact').onSnapshot((snapshot)=>{
                let contact = [];
                snapshot.forEach((doc)=>{
                  contact.push(doc.data())
                })
                dispatch({
                  type:'SET_ALL_CONTACT',
                  payload:contact
                })
              })
            }
          }