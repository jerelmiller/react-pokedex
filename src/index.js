import App from './App'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'
import './index.css'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
