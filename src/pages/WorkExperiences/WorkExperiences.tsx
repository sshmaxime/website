import React, { FunctionComponent } from "react";
import Page from "../../components/page"
import styled from 'styled-components'
import "./WorkExperiences.css";

const CppImg = "https://img.shields.io/badge/-C++-ff69b4"
const RosImg = "https://img.shields.io/badge/-ROS-brightgreen"
const GoImg = "https://img.shields.io/badge/-Go-blue"
const DockerImg = "https://img.shields.io/badge/-Docker-0db7ed"
const DevopsImg = "https://img.shields.io/badge/-DevOps-00008b"
const TfImg = "https://img.shields.io/badge/-Tensorflow-yellow"
const HfImg = "https://img.shields.io/badge/-Hyperledger Fabric-orange"
const ReactImg = "https://img.shields.io/badge/-ReactJs-61DBFB"
const JsImg = "https://img.shields.io/badge/-Javascript-yellow"
const TsImg = "https://img.shields.io/badge/-Typescript-cyan"

const Div = styled.div<{
}>`
  padding-bottom: 30px;
`

const H4 = styled.div<{
}>`
  font-weight: 900;
  margin-bottom: 4px;
  font-size: 1em;
  border-radius: 4px;
`

const H5 = styled.div<{
}>`
  font-size: 0.9em;
  padding-bottom: 10px;
`

const H6 = styled.div<{
}>`
  font-size: 0.8em;
  padding-bottom: 7px;
  font-style: italic;
`

const WorkExperience: FunctionComponent<{
  title: string,
  time: string,
  year: string,
  short: string,
  icons: string[],
  company: {
    name: string,
    url: string,
  }
}> = ({ title, time, year, short, icons, company }) => {
  return (
    <Div>
      <H4><span style={{ color: "#FAE232", backgroundColor: "black", padding: "3px", borderRadius: "5px" }}>{title}</span>&nbsp;Software Engineer</H4>
      <H5><span style={{ fontWeight: 700 }}>{year}</span>, {time} - <span style={{ cursor: "pointer", borderBottom: "1px solid black", paddingBottom: "1px" }} onClick={() => { window.open(company.url) }}>{company.name}</span></H5>
      <H6>{short}</H6>

      {
        icons.map((icon: string) => (
          <img key={icon} src={icon} style={{ marginRight: "5px" }} height="20px" alt="" />
        ))
      }

    </Div >
  )
}

const WorkExperiences: FunctionComponent = () => {
  return (
    <Page width="350px">
      <WorkExperience
        title="Robotics"
        time="7 months"
        year="2020"
        company={{ name: "Rigi.Tech", url: "https://www.rigi.tech/" }}
        short="Architect and code from scratch in C++ the ROS ecosystem and communications layers for Rigi.Tech's drone fleet."
        icons={[CppImg, RosImg, GoImg, DockerImg, DevopsImg]} />

      <WorkExperience
        title="Backend"
        time="7 months"
        year="2019"
        company={{ name: "Adagio.io", url: "https://adagio.io/" }}
        short="Day to day fixes and new features implementation on the backend code base in Go."
        icons={[GoImg, DockerImg, CppImg, TfImg]} />

      <WorkExperience
        title="Blockchain"
        time="8 months"
        year="2018"
        company={{ name: "Chainhero.io", url: "https://chainhero.io/" }}
        short="Develop and code blockchain smart contract's and apps in Go with Hyperledger Fabric."
        icons={[GoImg, DockerImg, HfImg]} />

      <WorkExperience
        title="Frontend"
        time="4 months"
        year="2016"
        company={{ name: "Fred&Farid", url: "https://fredfarid.com/" }}
        short="Design and code several Web Applications in React and Js."
        icons={[ReactImg, DockerImg, JsImg]} />
    </Page >
  )
}

export default WorkExperiences;