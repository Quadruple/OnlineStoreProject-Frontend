import React from 'react';
import Login from './Components/Login';
import Home_Page from './Components/Home_Page';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sign_up from './Components/Sign-up';
import Cart from './Components/Cart'

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
          <Sign_up></Sign_up>
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
