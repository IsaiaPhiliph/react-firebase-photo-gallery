import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCDw0nQlP-PFYqnb8yv3B2_EJ4vrg0sr-8",
    authDomain: "react-firebase-photo-gal-c9afb.firebaseapp.com",
    projectId: "react-firebase-photo-gal-c9afb",
    storageBucket: "react-firebase-photo-gal-c9afb.appspot.com",
    messagingSenderId: "448788050378",
    appId: "1:448788050378:web:eb1036f094dd7664395f33",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
