import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
// Add your firebase config here
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "example",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
