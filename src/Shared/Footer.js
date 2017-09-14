import React from "react"
import styled from "styled-components"

const pad = 40

export const Container = styled.div.attrs({
  className: "flex justify-center w-100 bg-black",
})`
  height: 50px;
`

const InnerContainer = styled.div.attrs({
  className: "flex items-center flex-auto",
})`
  max-width: 960px;
  padding-left: ${pad}px;
  padding-right: ${pad}px;
`

export const Label = styled.div.attrs({
  className: "gray code f6",
})``

const StyledLink = styled.a.attrs({
  className: "link washed-yellow hover-yellow",
})``

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <Label>
          <StyledLink href="https://github.com/bigorg/website">
            Source
          </StyledLink>{" "}
          | <StyledLink href="/tos">Terms</StyledLink> |{" "}
          <StyledLink href="/coc">Code of Conduct</StyledLink>
        </Label>
      </InnerContainer>
    </Container>
  )
}
