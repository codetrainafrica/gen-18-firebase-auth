import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDKfxbWY6HVvxCse9sFNkmDZ4V95gMN5p0",
    authDomain: "react-contact-8efaa.firebaseapp.com",
    projectId: "react-contact-8efaa",
    storageBucket: "react-contact-8efaa.appspot.com",
    messagingSenderId: "272528180139",
    appId: "1:272528180139:web:eeeb10fd584cb52f8248ee"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;