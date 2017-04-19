import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const fetchQuery = (operation, variables, cacheConfig, uploadables) => (
  fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json())
)

const source = new RecordSource()
const store = new Store(source)
const network = Network.create(fetchQuery)

const environment = new Environment({
  source,
  store,
  network
})

export default environment
