import React from "react";
import {hashHistory,Route, Router, IndexRoute} from "react-router";
import App from "./App";
import Home from "./Home";
import Persons from "./Persons";


export default class RouterComponent extends React.Component {

  render() {
  
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="persons" component={Persons} />
            {/*
              Insert missing Routes here
            */}
          </Route>
        </Router>
      </div>
    );
  }
}