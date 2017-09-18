import React from "react"
import styled from "styled-components"

import Card from "./Card"
import { Header, Footer } from "Shared"

import { pad, cardVisibility } from "config"

console.log(cardVisibility)

export const Container = styled.div.attrs({
  className: "h-100",
})``

export const Section = styled.div.attrs({
  className: "flex justify-center",
})`
`

export const InnerContainer = styled.div.attrs({
  className: "flex flex-wrap justify-between",
})`
  max-width: 960px;
  padding-right: ${pad}px;
`

export function View({ cards }) {
  return (
    <Container>
      <Header />
      <Section>
        <InnerContainer>
          {cards.map(card =>
            <Card key={card.id} {...cardVisibility} {...card} />
          )}
        </InnerContainer>
      </Section>
      <Footer />
    </Container>
  )
}
