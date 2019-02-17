import authReducer from "./authReducer";
import exampleReducer from "./exampleReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  example: exampleReducer, // reducer
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
