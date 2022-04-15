import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import Home from './components/home.component';
import ListBelanja from './components/ListBelanja.component';
import Login from './components/login.component';
import Register from './components/Register.component';
import DetailRecipe from './components/DetailRecipe.component';
import ShoppingList from './components/ShoppingList.component'
// import About from './components/about.component';
import auth from './config/firebase';
import Profile from './components/profile.component';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function App() {
  const [userid, setUserid] = useState('izma') // ini nantinya akan diganti sesuai dengan user yang login
  const [email,setEmail] = useState('')
  const [passwrd,setPasswrd] = useState('')
  

  const handleLoginBtn = async (event) => {
    event.preventDefault();
    const emailLogin = email;
    const passLogin = passwrd;
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailLogin, passLogin)
      console.log(userCredential.user.email)
     
      
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
    // setUser(currentUser);
    setUserid(currentUser.email)
  });

  
  // setUserid(auth.email);
  return (
    
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home userid={userid}/>}/>
            <Route path='/list' element={<ListBelanja userid={userid}/>}/>
            <Route path='/shoppinglist' element={<ShoppingList userid={userid}/>}/>
            <Route path='/user/login' element={<Login handleLoginBtn={handleLoginBtn} handleInputEmail={handleInputEmail} handlepasswrd={handlepasswrd} />}/>
            <Route path='/user/register' element={<Register />}/>
            <Route path='/detail/:id' element={<DetailRecipe/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
          {userid}
          

        </div>
      </Router>

    
    
  );
}

export default App;
