import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import "./App.css";
import 'emoji-mart/css/emoji-mart.css'
import Grid from '@material-ui/core/Grid';

import termonitorImg from './projects_img/termonitor.png'
import shImg from './projects_img/42sh.png'
import lemIPCImg from './projects_img/lemIPC.jpg'
import gauntletImg from './projects_img/Gauntlet.png'
import pacmanImg from './projects_img/pacman.jpg'
import continuedImg from './projects_img/continued.jpg'

import ReactTypingEffect from 'react-typing-effect';

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
      <ReactTypingEffect
        speed={100}
        text={["I'm a software engineer.", "Pretty cool effect huh ?", "Life is cool !", "Over."]}
      />
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
            style={{
              paddingRight: "20px",
              fontSize: "2em"
            }}
            svg
            countryCode={props.countryCode}
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
          <div className="companyName" onClick={() => window.open(props.link)}>
            {props.companyName}
          </div>
          <div className="diplomaName">
            {props.position}
          </div>
          <div className="detailsJob">
            {props.details.map((item, id, map) => {
              return (
                <React.Fragment key={id}>
                  <span>
                    <b style={{ backgroundColor: "#e6e6e6", paddingLeft: "2px", paddingRight: "2px" }}>{item}</b>
                  </span>
                  {id !== map.length - 1 ? ", " : ""}
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <div className="date">
          <ReactCountryFlag
            style={{
              paddingRight: "20px",
              fontSize: "2em"
            }}
            svg
            countryCode={props.countryCode}
          />
          {props.date[0]}
          {" "}
          -
          {" "}
          <b>{props.date[1]}</b>
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
      <WorkContainer companyName="Adagio.io" link="http://adagio.io" position="SOFTWARE ENGINEER" countryCode="fr" date={["Sept. 2019", "present"]} details={["Go", "C++", "Tensorflow", "RocksDB", "Terraform", "Packer", "GRPC"]} />
      <WorkContainer companyName="ChainHero" link="http://chainhero.io" position="BLOCKCHAIN ENGINEER INTERN" countryCode="fr" date={["8 months", "2018"]} details={["Go", "Blockchain", "Hyperledger Fabric", "Docker"]} />
      <WorkContainer companyName="StartUp Nursery" link="https://startupnursery.io" position="FULLSTACK ENGINEER INTERN" countryCode="fr" date={["2 months", "2017"]} details={["JS", "NodeJS", "Angular", "CSS"]} />
      <WorkContainer companyName="Fred & Farid" link="https://www.ffcreative.com" position="SOFTWARE ENGINEER INTERN" countryCode="cn" date={["4 months", "2016"]} details={["JS", "NodeJS", "CSS"]} />
    </div>
  )
}

function ProjectContainer(props) {
  return (
    <div className="containerContent">
      <Grid container spacing={4}>
        {props.projects.map((project, id) => {
          const isProjectLink = project.link !== ""
          return (
            <Grid key={id} item xs={12} md={6}>
              <div className="projectContainer" onClick={() => isProjectLink ? window.open(project.link) : null}>
                <img alt="" className="projectImg" src={project.img} />
                <div className="projectInfo">
                  <div className="projectName">{project.name}</div>
                  <div className="projectDescription">{project.description}</div>
                  <div className="projectTechno">
                    {project.techno.map((item, id, map) => {
                      return (
                        <React.Fragment key={id}>
                          <span>
                            <b style={{ backgroundColor: "#e6e6e6", paddingLeft: "2px", paddingRight: "2px", fontSize: "0.8em" }}>{item}</b>
                          </span>
                          {id !== map.length - 1 ? "/" : ""}
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

function Projects(props) {
  return (
    <div className="container">
      <div className="containerTitle">
        <span className="containerTitleNumber">02.</span>
        PROJECTS
      </div>
      <ProjectContainer projects={[
        {
          name: "Termonitor",
          description: "App to monitor your mining farm.",
          link: "https://github.com/MaximeAubanel/termonitor",
          img: termonitorImg,
          techno: ["ReactJS", "ElectronJS", "JavaScript", "MaterialUI"]
        }, {
          name: "42sh",
          description: "A shell reproduction.",
          link: "https://github.com/MaximeAubanel/42sh",
          img: shImg,
          techno: ["C", "Ncurses"]
        },
        {
          name: "lemIPC",
          description: "AI fighting through IPC.",
          link: "https://github.com/MaximeAubanel/42sh",
          img: lemIPCImg,
          techno: ["C", "CSFML", "Semaphore", "Shared memory", "MsgQ"]
        },
        {
          name: "IndieStudio",
          description: "Homemade Gauntlet.",
          link: "https://github.com/MaximeAubanel/IndieStudio",
          img: gauntletImg,
          techno: ["C++", "C", "Irrlich", "3D"]
        },
        {
          name: "Pacman/Snake",
          description: "Packman & Snake in 3 Graphic Lib.",
          link: "https://github.com/MaximeAubanel/Snake-Pacman",
          img: pacmanImg,
          techno: ["C++", "C", "OpenGL", "SFML", "Ncurses"]
        },
        {
          name: "To be continued.",
          description: "",
          link: "",
          img: continuedImg,
          techno: []
        },
      ]} />
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
      <div className="containerContent">
        <div style={{ display: "table" }}>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px", fontSize: "30px" }}>
            👨🏼‍💻
          </span>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px" }}>
            Maxime Aubanel
          </span>
        </div>
        <div style={{ display: "table" }}>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px", fontSize: "30px" }}>
            📍
          </span>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px" }}>
            Paris, FRANCE
          </span>
        </div>
        <div style={{ display: "table" }}>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px", fontSize: "30px" }}>
            📩
          </span>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px" }}>
            maximeauba@gmail.com
        </span>
        </div>
        <div style={{ display: "table" }}>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px", fontSize: "30px" }}>
            📞
          </span>
          <span style={{ display: "table-cell", verticalAlign: "middle", paddingLeft: "15px" }}>
            +33 6 48 26 82 27
        </span>
        </div>
      </div>
    </div >
  )
}

export default App;
