import React from 'react'
import { SafeAreaView } from 'react-native'

// other like ThemeProvider
const StyleProvider = ({ children }) => (
  <SafeAreaView>
    {children}
  </SafeAreaView>
)

export default StyleProvider
