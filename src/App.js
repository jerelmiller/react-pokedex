import Home from 'screens/Home'
import React  from 'react'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route exactly path='/' component={ Home } />
  </div>
)

export default App
