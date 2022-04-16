import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../images/logo.svg'
import auth from '../config/firebase'
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom'
// import { connect } from 'react-redux'

const Navbar = (props) =>{
  // console.log(props)
  const [show,setShow] = useState('true')
  const navigate = useNavigate()

  const handleLogoutBtn = async () => {
    await signOut(auth)
    navigate('/')
  }
    return (
      <nav className = 'navbar navbar-dark navbar-expand-sm px-3' style={{backgroundColor:'#123559', position:"sticky", top:0, zIndex:999}}>
        <Link to='/' className='navbar-brand'><img src={logo} alt="logo" style={{height:"30px", border:"none"}}/></Link>
        <button className="navbar-toggler border border-info text-info" onClick={() => setShow(!show)} >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={show?'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
          <ul className='navbar-nav ms-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            {props.userid && 
            <li className='navbar-item'>
              <Link to='/list' className='nav-link'>List Belanja</Link>
            </li>
            }
            {props.userid && 
            <li className='navbar-item'>
              <Link to='/menu' className='nav-link'>Menu Harian</Link>
            </li>
            }
            

          </ul>
          { props.userid ?
          <button to='/user/login' className="btn btn-primary" onClick={handleLogoutBtn}>Logout</button> :
          <Link to='/user/login' className="btn btn-primary">Login</Link>
        }
          
          {/* <p>{props.popup}</p> */}
        </div>
      </nav>
    )
  
}

// const mapStateToProps = (state) => ({
  // popup:state.popup
// })

// mapStateToProps()
// export default connect (mapStateToProps,null) (Navbar)
export default Navbar
// MapDispatchToProps