import React from "react"
import styled from "styled-components"

import Card from "./Card"
import { Header, Footer } from "Shared"

export const Container = styled.div.attrs({
  className: "h-100",
})``

export const Section = styled.div.attrs({
  className: "flex justify-center",
})`
`

export const InnerContainer = styled.div.attrs({
  className: "flex flex-wrap pa3 pl0 pt0 justify-between",
})`
  max-width: 960px;
`

export function View({ cards }) {
  return (
    <Container>
      <Header />
      <Section>
        <InnerContainer>
          {cards.map(card => <Card key={card.id} {...card} />)}
        </InnerContainer>
      </Section>
      <Footer />
    </Container>
  )
}
