// import Login from './pages/login.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux'
import store from './store/index.js'
import App from './App.jsx'




ReactDOM.render(<Provider store={store}>
  <App /></Provider>,
  document.getElementById('root')
);