import React from 'react'
import { SafeAreaView } from 'react-native'
import Providers from './providers/root.provider'
import Router from './router'

const App = () => (
  <SafeAreaView>
    <Providers>
      <Router/>
    </Providers>
  </SafeAreaView>
)

export default App
