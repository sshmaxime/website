import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppContainer">
          <ul style={{ margin: 0, padding: 0, display: "flex", "justifyContent": "space-between" }}>
            <li style={{ display: "inline-block" }}>
              <Link className="firstHeader" to="/">MAXIME AUBANEL</Link>
            </li>
            <div>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/education">00. Education</Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/work">01. Work Experience</Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link className="header" to="/projects">02. Projects</Link>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link className="headerLast" to="/contact">03. Contact</Link>
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

function EducationContainer(props) {
  return (
    <div className="containerContent">
      <div style={{ margin: 0, padding: 0, display: "flex", "justifyContent": "space-between" }}>
        <div>
          <div className="schoolName">
            {props.schoolName}
          </div>
          <div className="diplomaName">
            {props.diplomaName}
          </div>
          <div className="details">
            {props.details}
          </div>
        </div>
        <div className="date">
          <ReactCountryFlag
            styleProps={{
              paddingRight: "20px",
              fontSize: "2em"
            }}
            code={props.countryCode}
          />
          {props.date}
        </div>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className="container">
      <div className="containerTitle">
        <span className="containerTitleNumber">00.</span>
        EDUCATION
      </div>
      <EducationContainer schoolName="EPITECH Paris" diplomaName="Master of Computer Science" countryCode="fr" date="Sept. 2019 - June 2020" details="Project Management, DevOps, Flutter, FullstackJS" />
      <EducationContainer schoolName="Royal Melbourne Institut of Technology" diplomaName="Master of Computer Science (exchange)" countryCode="au" date=" June 2018 - June 2019" details="P2P Network, Artificial Intelligence, 3D Rendering, Cloud Computing, IoT, Data Science" />
      <EducationContainer schoolName="EPITECH Montpellier" diplomaName="Bachelor Of Computer Science" countryCode="fr" date="Sept. 2015 - June 2018" details="C, C++, Python, JAVA, C#, OCAML" />
      <EducationContainer schoolName="Lycée Jean Jaures" diplomaName="Scientist Baccalaureate" countryCode="fr" date="Sept. 2011 - June 2014" />
    </div >
  )
}

function WorkContainer(props) {
  return (
    <div className="containerContent">
      <div style={{ margin: 0, padding: 0, display: "flex", "justifyContent": "space-between" }}>
        <div>
          <div className="schoolName">
            {props.companyName}
          </div>
          <div className="diplomaName">
            {props.position}
          </div>
          <div className="detailsJob">
            {props.details.map((item, id, map) => {
              return (
                id !== map.length - 1 ? item + ", " : item
              )
            })}
          </div>
        </div>
        <div className="date">
          <ReactCountryFlag
            styleProps={{
              paddingRight: "20px",
              fontSize: "2em"
            }}
            code={props.countryCode}
          />
          {props.date[0]}
          {" "}
          -
          {" "}
          {props.date[1]}
        </div>
      </div>
    </div>
  )
}

function Work() {
  return (
    <div className="container">
      <div className="containerTitle">
        <span className="containerTitleNumber">01.</span>
        WORK EXPERIENCE
      </div>
      <WorkContainer companyName="Adagio.io" position="BACKEND DEVELOPER" countryCode="fr" date={["1 month", "present"]} details={["Go", "C++", "Tensorflow", "RocksDB", "Terraform", "Packer", "GRPC"]} />
      <WorkContainer companyName="ChainHero" position="BLOCKCHAIN DEVELOPER" countryCode="fr" date={["8 months", "2018"]} details={["Go", "Blockchain", "Hyperledger Fabric", "Docker"]} />
      <WorkContainer companyName="StartUp Nursery" position="FULLSTACK DEVELOPER" countryCode="fr" date={["2 months", "2017"]} details={["JS", "NodeJS", "Angular", "CSS"]} />
      <WorkContainer companyName="Fred & Farid" position="WEB DEVELOPER" countryCode="cn" date={["4 months", "2016"]} details={["JS", "NodeJS", "CSS"]} />
    </div>
  )
}

function Projects() {
  return (
    <div className="container">
      <div className="containerTitle">
        <span className="containerTitleNumber">02.</span>
        PROJECTS
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="container">
      <div className="containerTitle">
        <span className="containerTitleNumber">03.</span>
        CONTACT
      </div>
    </div>
  )
}

export default App;
