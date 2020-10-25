import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <div>Finally...</div>
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
  return <Link to={'/test_deployment/nick/nack'}>Cheese</Link>
}

export default App