import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%); 
  width: 300px;
`

export const Page: FunctionComponent = ({ children }) => {
  return (
    <Div>
      {children}
    </Div>
  )
}