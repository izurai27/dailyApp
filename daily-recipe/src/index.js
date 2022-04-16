import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { configureStore} from "@reduxjs/toolkit"

// import userReducer from './config/redux/userRedux'
import {BrowserRouter as Router} from 'react-router-dom';
//  const store = configureStore({
//   reducer :{
//     user:userReducer
//   },
// })

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
