import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import { setUser } from './store/actions';
import 'react-toastify/dist/ReactToastify.css';

if (localStorage.jwtToken) {
  axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.jwtToken;
  store.dispatch(setUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
