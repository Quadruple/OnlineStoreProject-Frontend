import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
