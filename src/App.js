import Home from 'screens/Home'
import Pokemon from 'screens/Pokemon'
import React  from 'react'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route exact path='/' component={ Home } />
    <Route path='/pokemon/:id' component={ Pokemon } />
  </div>
)

export default App
