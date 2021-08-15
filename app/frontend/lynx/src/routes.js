import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import Home from './components/Home';
import App from './components/App';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
  </Route>
);
