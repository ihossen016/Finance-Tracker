import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDy18kL6py7TYjD1UJIeQLibJqPNAedG2o",
  authDomain: "trackmoney-351ea.firebaseapp.com",
  projectId: "trackmoney-351ea",
  storageBucket: "trackmoney-351ea.appspot.com",
  messagingSenderId: "363515036090",
  appId: "1:363515036090:web:733e3ec68fe7a988579d83",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
