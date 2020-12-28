import React from 'react';
// import { Switch, Route } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/home';
import HomeIsLoggedIn from './containers/home';

function App({ isLoggedIn }) {

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={isLoggedIn ? HomeIsLoggedIn : Home} />
        <Route exact path="/login">
          <div>Login page</div>
          <Link to="/">Back</Link>
        </Route>
        <Route path="/signup">
          <div>Signup page</div>
          <Link to="/">Back</Link>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
