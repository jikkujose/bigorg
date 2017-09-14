import React from "react"
import styled from "styled-components"

const pad = 40

export const Wrapper = styled.div.attrs({
  className: "flex-auto",
})`
  padding-left: ${pad}px;
  padding-top: ${pad}px;
`

export const Container = styled.div.attrs({
  className:
    "hover-bg-yellow pv4 ph3 br3 bg-white flex justify-center items-center bg-animate pointer",
})`
  min-width: 280px;
  min-height: 200px;
`

export const Content = styled.div.attrs({
  className: "link flex flex-column items-center black",
})``

export const Icon = styled.div.attrs({
  className: "",
})``

export const Title = styled.div.attrs({
  className: "mt3 mb1 f3 roboto-slab heavy",
})``

export const SubTitle = styled.div.attrs({
  className: "roboto",
})``

export default function Card({ title, subTitle, icon, link }) {
  const showSubTitle = true
  const showTitle = true

  return (
    <Wrapper>
      <Container>
        <Content>
          {icon}
          {showTitle &&
            <Title>
              {title}
            </Title>}
          {showSubTitle &&
            <SubTitle>
              {subTitle}
            </SubTitle>}
        </Content>
      </Container>
    </Wrapper>
  )
}
