import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYvbVftMAVAS9iN_XIB2haqHZgSUNw4hc",
  authDomain: "acsenrollment-81ca3.firebaseapp.com",
  projectId: "acsenrollment-81ca3",
  storageBucket: "acsenrollment-81ca3.appspot.com",
  messagingSenderId: "766237559560",
  appId: "1:766237559560:web:f217d3feaf074128087abd",
  measurementId: "G-WNCTLS61R5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
