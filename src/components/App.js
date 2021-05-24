import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';



const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default App;
