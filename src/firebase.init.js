// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZZXaabjFlJ-DNdeoESzOYDP3CuyynYyQ",
    authDomain: "doctors-portal-19f7b.firebaseapp.com",
    projectId: "doctors-portal-19f7b",
    storageBucket: "doctors-portal-19f7b.appspot.com",
    messagingSenderId: "241003842246",
    appId: "1:241003842246:web:bf0eb4c9af78ac592de5c7"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;