import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import { Grommet } from "grommet"
import "./I18n"

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
    <Suspense fallback='loading...'>
      <Router />
    </Suspense>
  </Grommet>,
  document.getElementById("root")
)

serviceWorker.unregister()
