import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { ApolloProvider as Provider } from 'react-apollo'

const inMemoryCache = new InMemoryCache()
const link = new BatchHttpLink({
  uri: 'http://localhost:8000/graphql',
  includeExtensions: false,
  // headers: {},
  // credentials: 'include'  // for cookie
  batchInterval: 100,
  batchMax: 20,
})

const client = new ApolloClient({
  cache: inMemoryCache,
  // connectToDevTools: true,
  link: ApolloLink.from([link]),
  // for SSR
  // ssrForceFetchDelay: 100,
  // ssrMode: true,
  // here we're initializing the cache with the data from the server's cache
  // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

const ApolloProvider = ({ children }) => (
  <Provider client={client}>
    {children}
  </Provider>
)

export default ApolloProvider