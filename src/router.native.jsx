import React from 'react'
import { Button, Text } from 'react-native'
import { Router } from 'react-router'
import { Route } from 'react-router-native'
import { createMemoryHistory } from 'history'
import NavigationHeader from './components/global/navigation-header'
import ScreenHome from './screens/home'
import ScreenDashboard from './screens/dashboard'
import ScreenProtected from './screens/protected'
import ScreenExampleDemo from './screens/example-demo'

export const history = createMemoryHistory()
// createMemoryHistory({
//   initialEntries: ['/'], // The initial URLs in the history stack
//   initialIndex: 0, // The starting index in the history stack
//   keyLength: 6, // The length of location.key
//   // A function to use to confirm navigation with the user. Required
//   // if you return string prompts from transition hooks (see below)
//   getUserConfirmation: null
// });

export const routeMap = [
  { key: 'ScreenHome', path: '/', component: ScreenHome, exact: true },
  { key: 'ScreenDashboard', path: '/dashboard', component: ScreenDashboard },
  { key: 'ScreenProtected', path: '/protected', component: ScreenProtected },
  { key: 'ScreenExampleDemo', path: '/example-demo', component: ScreenExampleDemo },
]

// eslint-disable-next-line react/display-name
const Routing = React.memo(({ routes }) => <>{routes.map(e => <Route key={e.key} {...e} />)}</>)

const AppRouter = () => (
  <Router history={history}>
    <>
      <NavigationHeader />
      <Routing routes={routeMap} />
    </>
  </Router>
)

export default AppRouter
