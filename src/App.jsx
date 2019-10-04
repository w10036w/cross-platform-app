import React from 'react'
import StyleProvider from './providers/style.provider'
// import ApolloProvider from './providers/apollo.provider'
import StoresProvider from './providers/stores.provider'
import Router from './router'

/**
 * level (high to low)
 * Stores, Intl, Apollo, Style
 */

const App = () => (
  <StoresProvider>
    <StyleProvider>
      <Router/>
    </StyleProvider>
  </StoresProvider>
)

export default App
