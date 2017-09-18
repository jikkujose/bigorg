import React from "react"
import styled from "styled-components"

import { Header, Footer } from "Shared"

import { pad } from "config"

import Talk from "./components/Talk"

export const Container = styled.div.attrs({
  className: "h-100",
})``

export const Section = styled.div.attrs({
  className: "flex justify-center",
})`
`

export const InnerContainer = styled.div.attrs({
  className: "flex flex-wrap justify-between w-100 mt3",
})`
  max-width: 960px;
  padding-right: ${pad}px;
  padding-left: ${pad}px;
`

const Content = styled.div.attrs({
  className: "bg-white flex-auto roboto-slab pa4 br3",
})``

const Heading = styled.div.attrs({
  className: "f2",
})``

const List = styled.div.attrs({})``

export default function Talks({ talks }) {
  return (
    <Container>
      <Header />
      <Section>
        <InnerContainer>
          <Content>
            <Heading>Talks</Heading>
            <hr />
            <List>
              {talks.map(talk => <Talk key={talk.id} talk={talk} />)}
            </List>
          </Content>
        </InnerContainer>
      </Section>
      <Footer />
    </Container>
  )
}
