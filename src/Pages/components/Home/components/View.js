import React from 'react'

import Card from './Card'

import {
  Header,
  Footer
} from '../../../../Shared'

import { 
  Container,
  Section,
  InnerContainer
  } from './MarkUp'

export function View({ cards }) {
  return( 
  <Container>    
    <Header />
      <Section>
        <InnerContainer>
          {
            cards.map(card => <Card key={card.id} {...card} />)      
          }
        </InnerContainer>
      </Section>
      <Footer />
  </Container>
  )
}