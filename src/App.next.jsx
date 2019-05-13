import React from 'react'
import { View } from 'react-native'
import Routes from './router'
import ContProgress from './stores/progress.next'
// import ProgressBar from './components/global/progress-bar'
import styles from './App.style'

const App = () => (
  <View style={styles.app}>
    <ContProgress.Provider>
      <Routes />
    </ContProgress.Provider>
  </View>
)

export default App
