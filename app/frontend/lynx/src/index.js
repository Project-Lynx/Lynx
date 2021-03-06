import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './assets/css/Meta/index.css';
import App from './components/Landingpage/App'
import Home from './components/Homepage/Homepage'
import YieldCurve from './components/YieldCurve/root'

import reportWebVitals from './reportWebVitals';

ReactDOM.render((
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/YieldCurve" component={YieldCurve} />
    </div>
  </HashRouter>
), document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
