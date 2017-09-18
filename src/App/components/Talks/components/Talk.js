import React from "react"
import styled from "styled-components"

import { talkVisibility } from "config"

const Container = styled.div.attrs({
  className: "mt4",
})``

const Title = styled.div.attrs({
  className: "f3",
})``

const SubTitle = styled.div.attrs({
  className: "mt2",
})``

const Meta = styled.div.attrs({
  className: "f6 black-40 mv1",
})`
  font-weight: 700
`

const Venue = styled.span.attrs({
  className: "black-80",
})``

const Speaker = styled.span.attrs({
  className: "black-80",
})``

const Date = styled.span.attrs({
  className: "black-80",
})``

export const Talk = ({ talk }) => {
  const { title, subTitle, meta, link } = talk

  const showSubTitle = talkVisibility.showSubTitle

  return (
    <Container>
      <Title link={link}>
        {title}
      </Title>
      <Meta>
        <Venue>{meta.venue}</Venue> on <Date>{meta.date}</Date> by{" "}
        <Speaker>{meta.speaker.name}</Speaker>
      </Meta>
      {showSubTitle &&
        <SubTitle>
          {subTitle}
        </SubTitle>}
    </Container>
  )
}

export default Talk
