import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Page from "../../components/page"
import "./Studies.css";

const Div = styled.div<{
}>`
  padding-bottom: 30px;
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
  padding-bottom: 10px;
`

const Study: FunctionComponent<{
  title: {
    degree: string,
    field: string
  },
  school: string,
  year: string,
}> = ({ title, year, school }) => {
  return (
    <Div>
      <H4><span style={{ color: "red" }}>{title.degree}</span> Of <span>{title.field}</span></H4>
      <H5><span style={{ fontWeight: 700 }}>{year}</span>, {school}</H5>
    </Div >
  )
}

const Studies: FunctionComponent = () => {
  return (
    <Page width="350px">
      <Study
        title={{
          degree: "Master",
          field: "Computer Science"
        }}
        school="Epitech, Paris, FRANCE"
        year="2018 - 2020"
      />
      <Study
        title={{
          degree: "Master (ex.)",
          field: "Computer Science"
        }}
        school="R.M.I.T, Melbourne, AUSTRALIA"
        year="2018 - 2019"
      />
      <Study
        title={{
          degree: "Bachelor",
          field: "Computer Science"
        }}
        school="Epitech, Montpellier, FRANCE"
        year="2015 - 2018"
      />
    </Page>
  )
}

export default Studies;