import React, { FunctionComponent } from "react";
import Page from "../../components/page"
import styled from 'styled-components'
import "./Education.css";

const Div = styled.div<{
}>`
  padding-bottom: 10px;
`

const H4 = styled.div<{
}>`
  font-weight: 900;
  margin-bottom: 4px;
  font-size: 1.1em;
  border-radius: 4px;
`

const H5 = styled.div<{
}>`
  font-size: 0.9em;
  padding-bottom: 5px;
`

const Study: FunctionComponent<{
  title: {
    degree: string,
    field: string
  },
  location: string,
  school: string,
  year: string,
}> = ({ title, year, location, school }) => {
  return (
    <Div>
      <H4><span style={{ fontSize: "0.9em", color: "#FAE232", backgroundColor: "black", fontFamily: 'Source Code Pro', padding: "3px", borderRadius: "5px", letterSpacing: "-1px" }}>{title.degree}</span> Of <span>{title.field}</span></H4>
      <H5><span style={{ fontWeight: 900 }}>{school}</span> - <span style={{ fontStyle: "italic" }}>{year}</span></H5>
      <H5>📍 {location}</H5>
    </Div >
  )
}

const Education: FunctionComponent = () => {
  return (
    <Page width="350px">

      <div style={{ letterSpacing: "-0.5px", fontWeight: 900, padding: "10px", borderBottom: "1px solid black", marginBottom: "20px", marginRight: "100px", fontSize: "1.3em" }}>
        EDUCATION
      </div>

      <Study
        title={{
          degree: "MASTER",
          field: "Computer Science"
        }}
        school="Epitech"
        location="Paris, FRANCE 🇫🇷"
        year="2018 - 2020"
      />
      <Study
        title={{
          degree: "MASTER (ex.)",
          field: "Computer Science"
        }}
        school="R.M.I.T"
        location="Melbourne, AUSTRALIA 🇦🇺"
        year="2018 - 2019"
      />
      <Study
        title={{
          degree: "BACHELOR",
          field: "Computer Science"
        }}
        school="Epitech"
        location=" Montpellier, FRANCE 🇫🇷"
        year="2015 - 2018"
      />
    </Page >
  )
}



export default Education;