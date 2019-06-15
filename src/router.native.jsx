import React from 'react'
import { Router } from 'react-router'
import { Route } from 'react-router-native'
import NavigationHeader from './components/global/navigation-header'
import ScreenHome from './screens/home'
import ScreenDashboard from './screens/dashboard'
import ScreenProtected from './screens/protected'
import ScreenExampleDemo from './screens/example-demo'
import { history } from '~store'


export const routeMap = [
  { key: 'ScreenHome', path: '/', component: ScreenHome, exact: true },
  { key: 'ScreenDashboard', path: '/dashboard', component: ScreenDashboard },
  { key: 'ScreenProtected', path: '/protected', component: ScreenProtected },
  { key: 'ScreenExampleDemo', path: '/example-demo', component: ScreenExampleDemo },
]

// eslint-disable-next-line react/display-name
const Routing = ({ routes }) => <>{routes.map(e => <Route key={e.key} {...e} />)}</>

const AppRouter = () => (
  <Router history={history}>
    <>
      <NavigationHeader />
      <Routing routes={routeMap} />
    </>
  </Router>
)

export default AppRouter
