import React from 'react';
import { Route } from 'react-router';


import Home from './components/Homepage/Home';
import App from './components/Landingpage/App';


export default (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
  </Route>
);
