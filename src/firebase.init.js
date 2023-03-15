// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKW4xHoCZ60DdPF0vOva_DH79Ut4CAZUQ",
  authDomain: "car-services-bbbc3.firebaseapp.com",
  projectId: "car-services-bbbc3",
  storageBucket: "car-services-bbbc3.appspot.com",
  messagingSenderId: "537699851036",
  appId: "1:537699851036:web:cfe2b6d6dd2e3d0feaf8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth;