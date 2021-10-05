import UsersReducers from "../Reducers/UsersReducers";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import {
  getFirebase,
  reactReduxFirebase,
  firebaseReducer,
} from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../Firebase/Config";
import authReducer from "../Reducers/authReducer";

let reducers = combineReducers({
  user: UsersReducers,
  firebase: firebaseReducer,
  auth: authReducer,
});

var store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
