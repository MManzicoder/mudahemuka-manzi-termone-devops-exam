import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import "./App.css";
import Calculator from "./views/Calculator";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Calculator />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
