import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/home/Home"
import NotFound from "./components/404/NotFound.js"
import FormHooks from "./components/FormHooks"
import FormikForm from "./components/FormikForm"
import Intl from "./pages/intl"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/form' component={FormHooks} />
      <Route path='/formik' component={FormikForm} />
      <Route path='/intl' component={Intl} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
