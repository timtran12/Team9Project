import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/ContactUs'
import Login from './components/Login'
import History from './components/History'
import openeditor from './components/Login'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route  path = '/' exact component={Home} />

        <Route  path = '/About' exact component={About} />
        <Route path = '/ContactUs' exact component={Contact} />
        <Route path = '/Login' exact component={Login} />
        <Route path = '/Open Image Editor' exact component={openeditor} />
        <Route path = 'History' exact component={History} />
      </Switch>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
