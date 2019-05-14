import React from 'react'
import { Provider as UnstatedProvider, Subscribe } from 'unstated'
import Routes from '../router'
import ProgressBarU from '../stores/progress'
import { RootStyle } from '../App.style'

const App = () => (
  <RootStyle>
    <UnstatedProvider>
      <Subscribe to={[ProgressBarU]}>
        {progressBar => <Routes progressBar={progressBar} />}
      </Subscribe>
    </UnstatedProvider>
  </RootStyle>
)

export default App
