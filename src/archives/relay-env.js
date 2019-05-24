import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

function fetchQuery(operation, variables) {
  return fetch('http://127.0.0.1:8000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json())
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})
