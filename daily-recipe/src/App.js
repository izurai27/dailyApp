import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import Home from './components/home.component';
import ListBelanja from './components/ListBelanja.component';
// import MenuBelanja from './components/menuBelanja.component';
import Login from './components/login.component';
import Register from './components/Register.component';
import DetailRecipe from './components/DetailRecipe.component';
import ShoppingList from './components/ShoppingList.component'
import About from './components/about.component';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <br/> */}
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/list' element={<ListBelanja/>}/>
          <Route path='/shoppinglist' element={<ShoppingList/>}/>
          <Route path='/user/login' element={<Login/>}/>
          <Route path='/user/register' element={<Register/>}/>
          <Route path='/detail/:id' element={<DetailRecipe/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
        

      </div>
    </Router>
    
  );
}

export default App;
