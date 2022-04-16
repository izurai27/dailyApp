import React  from 'react'
import {Link} from 'react-router-dom'
import Gap from './gap'
import displayPassword from '../functions/displayPassword'

const Logout = (props) => {
  
  return (

    <div className='container-sm'>
      <Gap height="20px"/>
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