import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppContainer">
          <ul style={{ margin: 0, padding: 0, display: "flex", "justify-content": "space-between" }}>
            <li style={{ display: "inline-block" }}>
              <Link className="header firstHeader" to="/">MAXIME AUBANEL</Link>
            </li>
            <div>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/education">00. Education</Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/work">01. Work</Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/projects">02. Projects</Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/contact">03. Contact</Link>
              </li>
            </div>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>

          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="title">
      I'm a software engineer.
    </div>
  )
}

function Education() {
  return (
    <div className="container">
      Education
    </div>
  )
}

function Work() {
  return (
    <div className="container">
      Work
    </div>
  )
}

function Projects() {
  return (
    <div className="container">
      Projects
    </div>
  )
}

function Contact() {
  return (
    <div className="container">
      Contact
    </div>
  )
}

export default App;
