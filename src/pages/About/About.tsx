import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Page from "../../components/page";
import "./About.css";

const H6 = styled.div<{
}>`
  font-size: 1em;
  padding-bottom: 7px;
  font-style: italic;
`

const About: FunctionComponent = () => {
  return (
    <Page width="350px">
      <H6>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Software Engineer</b> with a strong background in both <b>low-level</b> & <b>high-level</b> applications.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expertise in <b>Go</b>, <b>C++</b>, <b>C</b>, <b>React</b> and <b>Ts/Js</b>.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deep computer knowledge such as <b>memory management</b>, <b>IPC</b>, <b>parallelism, concurrency</b> and of course <b>data structures and algorithms</b>.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>2 years</b> of professional experience in <b>robotics</b>, <b>backend</b>, <b>blockchain</b> and <b>UI</b> development.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Strong desire</b> to be part of an ambitious project that will make this world a better place.
      </H6>
    </Page >
  )
}

export default About;