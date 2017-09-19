import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Home } from "./components/Home"
import Talks from "./components/Talks"
import { NotFound } from "Shared"

import { activities, talks } from "data"

export default class App extends Component {
  render() {
    const basename = process.env.NODE_ENV === "production" ? "bigorg" : ""

    return (
      <Router basename={basename}>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <Home activities={activities} />}
          />
          <Route
            exact
            path="/talks"
            render={routeProps => <Talks talks={talks} />}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
