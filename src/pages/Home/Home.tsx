import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Page from "../../components/page"
import { Footer } from "../../footer/footer";
import WorkExperience from "../../components/workExperience";

const Home: FunctionComponent = () => {
  return (
    <Page width="320px" home>
      <div className="FirstPart">
        <div className="Title">MAXIME AUBANEL</div>
        <div className="Title2">👨🏼‍💻 SOFTWARE ENGINEER</div>
        <div className="Title2">🎓 <span style={{ fontSize: "0.9em", fontWeight: 600, letterSpacing: "-1px", fontStyle: "italic" }}>MSc, Computer Science</span></div>
        <div className="Title2">📚 <span style={{ fontSize: "0.9em", fontWeight: 600, letterSpacing: "-1px", fontStyle: "italic" }}>EPITECH, Paris</span></div>
        <div className="Subtitle">Less is more.</div>
      </div>

      <div className="Topics">

        <WorkExperience
          title="ROBOTICS"
          intern
          time="8 months"
          year="2020"
          company={{ name: "Rigi.Tech", url: "https://www.rigi.tech/" }}
          short="Architect and code from scratch the ROS ecosystem and communications layers for our drone fleet in C++." />

        <WorkExperience
          title="BACKEND"
          time="7 months"
          year="2019"
          company={{ name: "Adagio.io", url: "https://adagio.io/" }}
          short="Day to day fixes and new features implementation on the backend code base in Go." />

        <WorkExperience
          title="BLOCKCHAIN"
          intern
          time="8 months"
          year="2018"
          company={{ name: "Chainhero.io", url: "https://chainhero.io/" }}
          short="Develop and code blockchain smart contract's and apps with Hyperledger Fabric in Go." />

        <WorkExperience
          title="FRONTEND"
          intern
          time="4 months"
          year="2016"
          company={{ name: "Fred&Farid", url: "https://fredfarid.com/" }}
          short="Design and code several Web Applications in React/Js." />

        {/* <div className="Topic">
          <Link to="/projects">
            <h2 className="TopicTitle">click here</h2>
          </Link>
        </div> */}
      </div>
      <Footer />
    </Page >
  )
}

export default Home;