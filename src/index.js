import App from './App'
import React from 'react'
import { render } from 'react-dom'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: '/graphql'
})

const client = new ApolloClient({ networkInterface })

render(
  <ApolloProvider client={ client }>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
