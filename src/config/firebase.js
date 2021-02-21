import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrrp7fVvNFDFLlJEiLlroyt4xgZjEwkiU",
  authDomain: "sisticbackend.firebaseapp.com",
  databaseURL: "https://sisticbackend-default-rtdb.firebaseio.com",
  projectId: "sisticbackend",
  storageBucket: "sisticbackend.appspot.com",
  messagingSenderId: "789029751636",
  appId: "1:789029751636:web:640efd4b0279ed77d7d6c1",
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
