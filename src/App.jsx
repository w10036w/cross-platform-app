/**
 * stateless collection of non-business container
 * e.g. theme, layout, idle
 */
import React from 'react'
import StyleProvider from './providers/style.provider'
import Router from './router'

const App = () => (
  <StyleProvider>
    <Router/>
  </StyleProvider>
)

export default App
