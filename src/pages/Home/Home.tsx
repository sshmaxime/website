import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Page from "../../components/page"
import { Footer } from "../../footer/footer";

const Home: FunctionComponent = () => {
  return (
    <Page width="350px" home>
      <div className="FirstPart">
        <div className="Title">MAXIME AUBANEL</div>
        <div className="Title2">Software Engineer</div>
        <div className="Subtitle">Less is more.</div>
      </div>


      <div className="Topics">

        <div className="Topic">
          <Link to="/education">
            <h2 className="TopicTitle">EDUCATION</h2>
          </Link>
        </div>

        <div className="Topic">
          <Link to="/workexperience">
            <h2 className="TopicTitle">WORK EXPERIENCE</h2>
          </Link>
        </div>

        <div className="Topic">
          <Link to="/projects">
            <h2 className="TopicTitle">PROJECTS</h2>
          </Link>
        </div>

        <div className="Topic">
          <Link to="/about">
            <h2 className="TopicTitle">ABOUT ME</h2>
          </Link>
        </div>
      </div>
      <Footer />
    </Page>
  )
}

export default Home;