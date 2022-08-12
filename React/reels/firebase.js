// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOAY6B3rhu2xxTtU_OaJn99I0q4OViXos",
  authDomain: "instareels-2bc13.firebaseapp.com",
  projectId: "instareels-2bc13",
  storageBucket: "instareels-2bc13.appspot.com",
  messagingSenderId: "418616364979",
  appId: "1:418616364979:web:8223fd32e6b2165c6905c6",
  measurementId: "G-3WCKC36L7L"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
