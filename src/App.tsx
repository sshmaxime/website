import React, { FunctionComponent } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Studies from "./pages/Studies/Studies";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import WorkExperiences from "./pages/WorkExperiences/WorkExperiences";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <Route path="/studies">
          <Studies />
        </Route>

        <Route path="/WorkExperiences">
          <WorkExperiences />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;