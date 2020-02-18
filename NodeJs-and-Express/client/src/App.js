import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/RegisterForm" component={RegisterForm} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
