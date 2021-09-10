import UsersReducers from "../Reducers/UsersReducers";
import { applyMiddleware, createStore ,compose} from "redux";
import { getFirebase ,reactReduxFirebase} from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from '../Firebase/Config'



var store = createStore(UsersReducers,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reactReduxFirebase(firebase),
reduxFirestore(getFirestore),
))



export default store