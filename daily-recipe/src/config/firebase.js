import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXuplE1cMNCGreE2Dt8-ObAXvsApq1luM",
  authDomain: "daily-recipe-feaef.firebaseapp.com",
  projectId: "daily-recipe-feaef",
  storageBucket: "daily-recipe-feaef.appspot.com",
  messagingSenderId: "703638561083",
  appId: "1:703638561083:web:f85b73fc309b1736af171e",
  measurementId: "G-5YQRB6D16L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth