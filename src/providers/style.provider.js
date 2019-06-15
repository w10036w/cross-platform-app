import React from 'react'
import { SafeAreaView } from 'react-native'

const StyleProvider = ({ children }) => (
  <SafeAreaView>
    {children}
  </SafeAreaView>
)

export default StyleProvider