import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div.attrs({
  className: 'bg-green pl3 pt3 flex-auto'
})`
`

export const Container = styled.div.attrs({
  className: 'bg-yellow pv4 ph3'
})`
  min-width: 300px;
`

export const StyledLink = styled.a.attrs({
  className: 'link flex flex-column items-center black'
})``

export const Icon = styled.div.attrs({
  className: ''
})``

export const Title = styled.div.attrs({
  className: 'mt3 mb1 f3 roboto-slab'
})``

export const SubTitle = styled.div.attrs({
  className: 'roboto'
})``

export default function Card({ title, subTitle, icon, link }) {
  return(
    <Wrapper>
      <Container>
        <StyledLink href={link}>
          {icon}
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </StyledLink>
      </Container>
    </Wrapper>
  )
}