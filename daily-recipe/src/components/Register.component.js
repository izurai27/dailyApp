import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword} from "firebase/auth";
import '../components/register.css';
import displayPassword from '../functions/displayPassword'
import auth from '../config/firebase';
import { useSelector} from 'react-redux'

const Register = () => {
  const [email,setEmail] = useState('')
  const [passwrd,setPasswrd] = useState('')
  // const [user, setUser] = useState({});
  const userd = useSelector((state)=>state.user.value)
  console.log(userd.name)

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  

  const handleInputEmail = (e) => {
    setEmail (e.target.value);
    
  }
  
  const handlepasswrd = (e) => {
    setPasswrd(e.target.value)
  }
     
  const handleRegisterBtn = async (event) => {
    event.preventDefault() //dont forget this
    const emailReg = email;
    const passReg = passwrd;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailReg, passReg)
      console.log(userCredential)
    } catch (error) {
      console.log(error.message)
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