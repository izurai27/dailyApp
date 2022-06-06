import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import Home from './components/home.component';
import ListBelanja from './components/ListBelanja.component';
import Login from './components/login.component';
import Register from './components/Register.component';
import DetailRecipe from './components/DetailRecipe.component';
import auth from './config/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import MenuBelanja from './components/menuBelanja.component';


function App() {

  const [userid, setUserid] = useState(undefined) // ini nantinya akan diganti sesuai dengan user yang login
  const [email,setEmail] = useState('')
  const [passwrd,setPasswrd] = useState('')
  const navigate = useNavigate()
  

  const handleLoginBtn = async (event) => {
    event.preventDefault();
    const emailLogin = email;
    const passLogin = passwrd;
    
    try {
      await signInWithEmailAndPassword(auth, emailLogin, passLogin)
      navigate('/')
      
    } catch (error) {
      console.log(error.code)
      
    }
  }

  const handleInputEmail = (e) => {
    setEmail (e.target.value);
    
  }
  
  const handlepasswrd = (e) => {
    setPasswrd(e.target.value)
  }

  onAuthStateChanged(auth, (currentUser) => {
    currentUser? setUserid(currentUser.email) : setUserid(undefined)
  });

  
  return (
    <div>
      <Navbar userid={userid} />
      <Routes>
        <Route path='/' exact element={<Home userid={userid}/>}/>
        <Route path='/list' element={<ListBelanja userid={userid}/>}/>
        <Route path='/user/login' element={<Login handleLoginBtn={handleLoginBtn} handleInputEmail={handleInputEmail} handlepasswrd={handlepasswrd} />}/>
        <Route path='/user/register' element={<Register />}/>
        <Route path='/detail/:id' element={<DetailRecipe/>}/>
        <Route path='/menu' element={<MenuBelanja/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
