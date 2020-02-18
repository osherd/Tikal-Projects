import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from './components/Home'
import { TVShow } from './components/tv-show/TVShow';
import PrivateRoute from './components/PrivateRoute';
//import { TVShowData } from './data/TVShowData';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Home}>
          </PrivateRoute>
          <PrivateRoute path="/show/:id" component={TVShow}>
          </PrivateRoute>
        </Switch>
      </HashRouter>
    )
  }

}

export default App;
