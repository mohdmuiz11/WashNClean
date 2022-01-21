// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import * as firebaseauth from "firebase/auth";
import * as firebasedb from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCETAOe9N4QMaZLrTfvVkUWUfZigPZ7nCM",
  authDomain: "washnclean-40a3b.firebaseapp.com",
  projectId: "washnclean-40a3b",
  storageBucket: "washnclean-40a3b.appspot.com",
  messagingSenderId: "1019013955164",
  appId: "1:1019013955164:web:938b3dbe92db26322e3099"
};

// Initialize Firebase
let app;
if(firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}


const auth = firebaseauth.getAuth();
const firebasefirestore = firestore.getFirestore();
const db = firebasedb.getDatabase();

export { auth , firebasefirestore, db };