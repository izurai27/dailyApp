import React  from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'
import displayPassword from '../functions/displayPassword'
// import {signInWithEmailAndPassword, signOut } from "firebase/auth";
// import auth from '../config/firebase';
// import { login } from '../config/redux/userRedux'
// import { useDispatch } from 'react-redux';
// import { useSelector} from 'react-redux'

const Login = (props) => {
  // const [email,setEmail] = useState('')
  // const [passwrd,setPasswrd] = useState('')
  

  // const handleLoginBtn = async (event) => {
  //   event.preventDefault();
  //   const emailLogin = email;
  //   const passLogin = passwrd;
    
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, emailLogin, passLogin)
  //     console.log(userCredential.user.email)
  //     dispatch(login({name:"fajri jelek bangget", age:0, email:""}))
      
  //   } catch (error) {
  //     console.log(error.code)
      
  //   }
  // }

  // const handleInputEmail = (e) => {
  //   setEmail (e.target.value);
    
  // }
  
  // const handlepasswrd = (e) => {
  //   setPasswrd(e.target.value)
  // }

  // const handleLogoutBtn = async () => {
  //   await signOut(auth);
  // }

  return (
    <div className='container-sm'>
      
      <form className='container-sm'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailLogin" placeholder='Masukkan alamat email yang didaftarkan' onChange={props.handleInputEmail}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className='togglewrapper'>
            <input type="password" className="form-control" id="exampleInputPassword1" name="passwordLogin" placeholder='password' onChange={props.handlepasswrd}/>
            <i className="bi bi-eye-slash bi-eye" id="togglePassword" onClick={displayPassword}></i>
          </div>
          <div id="passwordHelp" className="form-text">Lupa password?</div>
        </div>
        <button  className="btn btn-primary" onClick={props.handleLoginBtn} >Login</button>
        {/* <button  className="btn btn-primary" onClick={handleLogoutBtn}>Logout</button> */}
        
      </form>
      <Gap height="20px"/>
      <div>
        <Gap width="13px" height="1px"/>
        <Link to='/user/register' className='navbar-brand fs-6'>Belum punya akun? Registrasi di sini</Link>
      </div>
      
    </div>
  )
}

export default Login