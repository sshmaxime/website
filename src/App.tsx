import React, { FunctionComponent } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;