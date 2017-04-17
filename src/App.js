import Pokemons from 'screens/Pokemons'
import Pokemon from 'screens/Pokemon'
import React  from 'react'
import { Redirect, Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route exact path='/' render={ () => <Redirect to='/pokemon' /> } />
    <Route exact path='/pokemon' component={ Pokemons } />
    <Route path='/pokemon/:id' component={ Pokemon } />
  </div>
)

export default App
