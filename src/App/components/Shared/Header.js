import React from "react"
import styled from "styled-components"

import { Logo } from "assets"

import { pad } from "config"

export const Container = styled.div.attrs({
  className: "flex justify-center w-100 bg-black mt3",
})`
  height: 80px;
`

const InnerContainer = styled.div.attrs({
  className: "flex items-center flex-auto pointer",
})`
  max-width: 960px;
  padding-left: ${pad}px;
  padding-right: ${pad}px;
`

export const Title = styled.div.attrs({
  className: "white roboto-slab ml3 f3 dn db-l db-m",
})``

export default function Header() {
  return (
    <Container>
      <InnerContainer>
        <Logo size={50} color="#ffd700" />
        <Title>Blockchain Interest Group</Title>
      </InnerContainer>
    </Container>
  )
}
