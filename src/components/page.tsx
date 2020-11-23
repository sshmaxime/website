import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import ArrowImg from "../assets/left-arrow.png"
import { RouteComponentProps } from 'react-router-dom'
import { withRouter } from "react-router";

const OuterDiv = styled.div<{
  width: string;
}>`
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%); 
  width: ${props => props.width};
  height: 100vh;
`

const Div = styled.div<{
  width: string;
}>`
  margin-top: 100px;
  width: ${props => props.width};
`

const Page: FunctionComponent<{ width: string, home?: boolean } & RouteComponentProps> = ({ children, width, home = false, history }) => {
  return (
    <OuterDiv width={width}>
      {
        !home ?
          <div style={{ position: "absolute", top: 50 }}>
            <img src={ArrowImg} alt="" width="30px" style={{ cursor: "pointer" }} onClick={() => { history.goBack() }} />
          </div>
          : null
      }
      <Div width={width}>
        {children}
      </Div>
    </OuterDiv>

  )
}

export default withRouter(Page)