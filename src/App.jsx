import React from 'react'
import StyleProvider from './providers/style.provider'
// import ApolloProvider from './apollo.provider'
import StoresProvider from './providers/stores.provider'
import Router from './router'

/**
 * level (high to low)
 * Stores, Intl, Apollo, Style
 * * can assign an "initValue" for providers and change in ./stores accordingly
 */

const App = () => (
  <StoresProvider>
    <StyleProvider>
      <Router/>
    </StyleProvider>
  </StoresProvider>
)

export default App
