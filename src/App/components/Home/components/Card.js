import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { pad } from "config"

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
  className: "flex flex-column items-center black",
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

export default function Card({
  title,
  subTitle,
  icon,
  link,
  showTitle,
  showSubTitle,
}) {
  return (
    <Wrapper>
      <NavLink to={link} className="no-underline">
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
      </NavLink>
    </Wrapper>
  )
}
