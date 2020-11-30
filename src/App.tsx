import React, { FunctionComponent } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import WorkExperience from "./pages/WorkExperience/WorkExperience";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/workexperience">
          <WorkExperience />
        </Route>

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