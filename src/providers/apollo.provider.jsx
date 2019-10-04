import React from 'react'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider as Provider } from '@apollo/react-hooks'

const client = new ApolloClient({
  // connectToDevTools: true,
  link: 'https://48p1r2roz4.sse.codesandbox.io',
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