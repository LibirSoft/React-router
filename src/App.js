import React, { Component } from "react";
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact render={
              () => {
                return (<h1>HomePage</h1>)
              }
            } />
            <Route path="/abaout" exact render={
              () => {
                return (<h1>AbaoutPage</h1>)
              }
            } />
          </div>
        </Router>
      </div>
    );
  }
}