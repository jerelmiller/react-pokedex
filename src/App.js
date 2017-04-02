import Container from 'components/Container'
import Home from 'screens/Home'
import Pokemon from 'screens/Pokemon'
import React  from 'react'
import { Redirect, Route } from 'react-router-dom'

const App = () => (
  <Container>
    <Route exact path='/' render={ () => <Redirect to='/pokemon' /> } />
    <Route exact path='/pokemon' component={ Home } />
    <Route path='/pokemon/:id' component={ Pokemon } />
  </Container>
)

export default App
