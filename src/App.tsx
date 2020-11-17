import React, { FunctionComponent } from "react";
import "./App.css";
import Github from "./github.png"

const App: FunctionComponent = () => {
  return (
    <div className="App">

      <div className="Container">

        <div className="FirstPart">
          <div className="Title">Maxime Aubanel</div>
          <div className="Title2">Software Engineer</div>
          <div className="Subtitle">Less is more</div>
        </div>


        <div className="Topics">

          <div className="Topic">
            <h2 className="TopicTitle">Studies</h2>
          </div>

          <div className="Topic">
            <h2 className="TopicTitle">Work Experience</h2>
          </div>

          <div className="Topic">
            <h2 className="TopicTitle">Projects</h2>
          </div>

          <div className="Topic">
            <h2 className="TopicTitle">About Me</h2>
          </div>
        </div>

        <div className="Contact">
          <div className="Block">
            <span className="head">Location:</span><span className="tail">Montpellier, FRANCE</span>
          </div>
          <div className="Block">
            <span className="head">Email:</span><span className="tail">maximeauba@gmail.com</span>
          </div>
          <div className="Block">
            <span className="head">Phone:</span><span className="tail">(+33) 6 48 26 82 27</span>
          </div>

        </div>

        <div className="Icons">
          <img className="Icon" src={Github} alt="" width={"30px"} onClick={() => { window.open("https://github.com/sshmaxime") }} />
        </div>

      </div >
    </div >
  );
}

export default App;