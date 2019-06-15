import React from 'react'
import { Router } from 'react-router'
import { Route } from 'react-router-native'
import NavigationHeader from './components/global/navigation-header'
import ScreenHome from './screens/home'
import ScreenDashboard from './screens/dashboard'
import ScreenProtected from './screens/protected'
import { history } from '~store'


export const routes = [
  { key: 'ScreenHome', path: '/', component: ScreenHome, exact: true },
  { key: 'ScreenDashboard', path: '/dashboard', component: ScreenDashboard, exact: true },
  { key: 'ScreenProtected', path: '/protected', component: ScreenProtected, exact: true },
]

const AppRouter = () => {
  console.log('placeholder')
  return (
    <Router history={history}>
      <>
        <NavigationHeader />
        <Route exact path="/" component={ScreenHome} />
        <Route path="/dashboard" component={ScreenDashboard} />
        <Route path="/protected" component={ScreenProtected} />
      </>
    </Router>
  )
}

export default AppRouter
