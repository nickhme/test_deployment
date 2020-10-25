import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <div>Hello friend</div>
    <Switch>
      <Route exact path="/test_deployment/nick/nack" component={Home}/>
      <Route exact path="/test_deployment" component={Cheeses}/>
    </Switch>
  </BrowserRouter>
)

const Home = () => {
  return <h1>Home</h1>
}

const Cheeses = () => {
  return <a href="/nick/nack">Cheese</a>
}

export default App