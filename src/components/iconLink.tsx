import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  &:hover {
    cursor: pointer;
  }
`

type props = {
  src: string,
  url: string,
}

const IconLink: FunctionComponent<props> = ({ src, url }) => {
  return (
    <Div><img className="Icon" src={src} alt="" width={"30px"} onClick={() => { window.open(url) }} /></Div>
  )
}

export default IconLink