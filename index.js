import { AppRegistry } from 'react-native'
import App from './src/App'

AppRegistry.registerComponent('crossapp', () => App)

AppRegistry.runApplication('crossapp', {
  rootTag: document.getElementById('root'),
})
