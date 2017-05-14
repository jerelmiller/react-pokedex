import App from './App'
import React from 'react'
import { render } from 'react-dom'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo'
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: '/graphql'
})

const client = new ApolloClient({ networkInterface })

render(
  <ApolloProvider client={ client }>
    <StyletronProvider styletron={ new Styletron() }>
      <Router>
        <App />
      </Router>
    </StyletronProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
