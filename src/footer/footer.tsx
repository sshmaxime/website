import React, { FunctionComponent } from 'react'
import Github from "../assets/github.png"
import styled from 'styled-components'
import IconLink from '../components/iconLink'

const Div = styled.div`
  margin-top: 30px;
  font-size: 0.95em;
`

const Icons = styled.div`
  margin-top: 10px;
  padding: 10px;
`

const Head = styled.span`
  font-weight: 900;
  font-style: italic;
  width: 200px;
`

const Tail = styled.span`
  margin-left: 10px;
`

export const Footer: FunctionComponent = () => {
  return (
    <Div>
      <div>
        <Head >Location:</Head><Tail>Montpellier, FRANCE</Tail>
      </div>
      <div>
        <Head>Email:</Head><Tail>maximeauba@gmail.com</Tail>
      </div>
      <div>
        <Head>Phone:</Head><Tail>(+33) 6 48 26 82 27</Tail>
      </div>

      <Icons>
        <IconLink src={Github} url={"https://github.com/sshmaxime"} />
      </Icons>
    </Div>
  )
}

