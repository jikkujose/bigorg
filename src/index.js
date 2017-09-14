import React, { Component } from "react"
import { render } from "react-dom"
import "tachyons"

import "./styles/main.css"
import "./styles/fonts.css"

import { Home } from "./Pages"

import { activities } from "./data"

class App extends Component {
  render() {
    return <Home activities={activities} />
  }
}

render(<App />, document.getElementById("root"))
