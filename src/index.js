import React from "react"
import ReactDOM from "react-dom"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { Grommet } from "grommet"

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
}

ReactDOM.render(
  <Grommet theme={theme}>
    <Router />
  </Grommet>,
  document.getElementById("root")
)

serviceWorker.unregister()
