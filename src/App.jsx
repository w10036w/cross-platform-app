import React from 'react'
import { View } from 'react-native'
import { Provider as UnstatedProvider, Subscribe } from 'unstated'
import Routes from './router'
import ProgressBarU from './components/global/progress-bar/unstate'
// import ProgressBar from './components/global/progress-bar'
import styles from './App.style'

const App = () => (
  <View style={styles.app}>
    <UnstatedProvider>
      <Subscribe to={[ProgressBarU]}>
        {progressBar => <Routes progressBar={progressBar} />}
      </Subscribe>
    </UnstatedProvider>

  </View>
)

export default App
