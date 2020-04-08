import React from 'react';
import Login from './Components/Login'
import Home_Page from './Components/Home_Page'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home_Page></Home_Page>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
