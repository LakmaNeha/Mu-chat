import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBeyg6i516kxJsBvv4AzXS5hPAIJDN57GY",
    authDomain: "mu-chat-36c25.firebaseapp.com",
    projectId: "mu-chat-36c25",
    storageBucket: "mu-chat-36c25.appspot.com",
    messagingSenderId: "144402752533",
    appId: "1:144402752533:web:8272c882fc2934a8bdda1c"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const auth = firebase.auth();

  export  { db , timestamp, auth};