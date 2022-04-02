import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import '../components/register.css';
import displayPassword from '../displayPassword'


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
// onAuthStateChanged(auth, user => {
//   // Check for user status
//   console.log(user)
// });

const Register = () => {
  const [email,setEmail] = useState('')
  const [passwrd,setPasswrd] = useState('')
  
  
  const handleInputEmail = (e) => {
    setEmail (e.target.value);
    
  }
  
  const handlepasswrd = (e) => {
    setPasswrd(e.target.value)
  }
     
  const handleRegisterBtn = async () => {
    // console.log(email, passwrd)
    const emailReg = email;
    const passReg = passwrd;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailReg, passReg)
      console.log(userCredential)
    } catch (error) {
      console.log(error)
      // showLoginError(error)
    }
  }

  return (
    <div className='container-sm'>

      <form className='container-sm'>
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={handleInputEmail} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"  placeholder="Masukkan alamat email akan yang didaftarkan" name="emailReg"/>
          {/* <div id="emailHelp" className="form-text">Masukkan alamat email akan yang didaftarkan</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">Password</label>
          <div className='togglewrapper'>
            <input  onChange={handlepasswrd} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  type="password" className="form-control" id="InputPassword" placeholder="Ketikkan password yang akan digunakan" name="PasswordReg" style={{position:"relative" }}/>
            <i className="bi bi-eye-slash" id="togglePassword" onClick={displayPassword}></i>
          </div>
          <p className="form-text">password harus mengandung huruf besar dan angka, dan minimal 8 karakter</p>
        </div>
       
        <button onClick={handleRegisterBtn} type="submit" className="btn btn-primary ">Register</button>
      </form>
      <Gap height="20px"/>
      <div>
        <Gap width="4px" height="1px"/>
        <Link to='/user/login' className='navbar-brand fs-6 ms-2 mt-3'>Ke Halaman Login</Link>
      </div>
    </div>
  )
}

export default Register