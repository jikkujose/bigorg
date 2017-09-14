import React from "react"

import { Container, Header, Title, Content, Heading, Body, Author } from "./MarkUp"

import { Icon } from './Icon'

export function View() {
  return (
    <Container>
      <Header>
      <Icon size={20} />
        <Title>Standard Template</Title>
      </Header>
      <Content>
        <Heading>
          CSS is an interesting but often messy system!
        </Heading>
        <Author>
          John Doe
        </Author>
        <Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Body>
      </Content>
    </Container>
  )
}