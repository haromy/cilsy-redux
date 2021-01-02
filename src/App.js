import React from 'react';
// import { Switch, Route } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './containers/home';
import AnotherPage from './containers/array';
import Todo from './containers/todo';

function App() {

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/array" component={AnotherPage} />
        <Route exact path="/todo" component={Todo} />
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
