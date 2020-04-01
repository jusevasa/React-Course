import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route exact path='/register' component={ Register} />
        <Route exact path='/home' component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
