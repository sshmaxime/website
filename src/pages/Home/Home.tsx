import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Page from "../../components/page"
import { Footer } from "../../footer/footer";

const Home: FunctionComponent = () => {
  return (
    <Page width="350px" home>
      <div className="FirstPart">
        <div className="Title">Maxime Aubanel</div>
        <div className="Title2">Software Engineer</div>
        <div className="Subtitle">Less is more.</div>
      </div>


      <div className="Topics">

        <div className="Topic">
          <Link to="/studies">
            <h2 className="TopicTitle">Studies</h2>
          </Link>
        </div>

        <div className="Topic">
          <Link to="/workexperiences">
            <h2 className="TopicTitle">Work Experiences</h2>
          </Link>
        </div>

        <div className="Topic">
          <Link to="/projects">
            <h2 className="TopicTitle">Projects</h2>
          </Link>
        </div>

        <div className="Topic">
          <Link to="/about">
            <h2 className="TopicTitle">About Me</h2>
          </Link>
        </div>
      </div>
      <Footer />
    </Page>
  )
}

export default Home;