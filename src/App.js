import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <div>Hello mah</div>
    <Switch>
      <Route exact path="/nick/nack" component={Home}/>
      <Route exact path="/nick" component={Cheeses}/>
    </Switch>
  </BrowserRouter>
)

const Home = () => {
  return <h1>Home</h1>
}

const Cheeses = () => {
  return <h1>Cheese</h1>
}

export default App