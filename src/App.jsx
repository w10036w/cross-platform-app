/**
 * stateless collection of non-business container
 * e.g. theme, layout, idle
 */
import React from 'react'
import { SafeAreaView } from 'react-native'
import Business from './business'

const App = () => (
  <SafeAreaView>
    <Business />
  </SafeAreaView>
)

export default App
