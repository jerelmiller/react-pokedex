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
  uri: 'https://graphql-pokemon.now.sh'
})

const client = new ApolloClient({ networkInterface })

render(
  <Router>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
