import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Home } from "./components/Home"
import { NotFound } from "Shared"

import { activities } from "data"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => <Home activities={activities} />}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
