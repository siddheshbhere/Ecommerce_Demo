//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA96OIVuvtRmVeR_aiGbR3hJ-UBmdZ5sJk",
    authDomain: "ecommerce-43da7.firebaseapp.com",
    projectId: "ecommerce-43da7",
    storageBucket: "ecommerce-43da7.appspot.com",
    messagingSenderId: "396834525566",
    appId: "1:396834525566:web:808bb32444c05216f7232f"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // export

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();