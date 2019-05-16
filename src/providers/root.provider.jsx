import React from 'react'
// import ApolloProvider from './apollo.provider'
import StoresProvider from './stores.provider'

/**
 * level (high to low)
 * Stores, Intl, Apollo, Style
 */
const RootProvider = ({ children }) => (
  <StoresProvider>
    {children}
  </StoresProvider>
)

export default RootProvider