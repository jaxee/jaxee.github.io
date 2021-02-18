import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mountain">
            <Mountain />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Index() {
  return <h2>Under Construction</h2>;
}

function Mountain() {
  return <h2>Mountain</h2>;
}
