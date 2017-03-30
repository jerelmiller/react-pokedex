import App from './App'
import React from 'react'
import { render } from 'react-dom'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo'
import 'normalize.css'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: 'https://graphql-pokemon.now.sh'
})

const client = new ApolloClient({ networkInterface })

render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
