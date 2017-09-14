import React from "react"
import styled from "styled-components"

export const Container = styled.div.attrs({
  className: "flex justify-center w-100 bg-black",
})`
  height: 50px;
`

const InnerContainer = styled.div.attrs({
  className: "flex items-center flex-auto ph3",
})`
  max-width: 960px;
`

export const Label = styled.div.attrs({
  className: "gray code f7",
})``

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Label>Source | ToS | CoC</Label>
      </InnerContainer>
    </Container>
  )
}
