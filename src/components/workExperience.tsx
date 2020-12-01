import React, { FunctionComponent } from "react";
import styled from 'styled-components'

const Div = styled.div<{
}>`
  padding-bottom: 10px;
`

const H4 = styled.div<{
}>`
  font-weight: 900;
  margin-bottom: 4px;
  font-size: 0.9em;
  border-radius: 4px;
`

const H5 = styled.div<{
}>`
  font-size: 0.8em;
  padding-bottom: 5px;
`

const H6 = styled.div<{
}>`
  font-size: 0.7em;
  padding-bottom: 5px;
  font-style: italic;
`

const WorkExperience: FunctionComponent<{
  title: string,
  intern?: boolean,
  time: string,
  year: string,
  short: string,
  company: {
    name: string,
    url: string,
  }
}> = ({ title, intern, time, year, short, company }) => {
  return (
    <Div>
      <H4>
        <span style={{ color: "red", fontFamily: 'Source Code Pro', letterSpacing: "-1px" }}>{title}</span>&nbsp;<span style={{ fontFamily: 'Source Code Pro', letterSpacing: "-1px" }}>Software Engineer </span>
        {intern ?
          <span style={{ fontSize: "0.8em", color: "white", borderRadius: "100px", backgroundColor: "black", padding: "5px", fontStyle: "italic" }}>
            INTERN
          </span>
          : null
        }
      </H4>
      <H5><span style={{ fontWeight: 700 }}>{year}</span>, {time} - <span style={{ fontStyle: "italic", cursor: "pointer", borderBottom: "1px solid black", paddingBottom: "1px" }} onClick={() => { window.open(company.url) }}>{company.name}</span></H5>
      {/* <H6>{short}</H6> */}
    </Div >
  )
}

export default WorkExperience;