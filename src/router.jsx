import React from 'react'
import { Text, View } from 'react-native'
import { Router, Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable'
import { capitalize } from 'lodash'
import NavigationHeader from './components/global/navigation-header'
import PageHome from './pages/home'
import { history } from '~store'

const asyncPages = [
  'protected',
  'dashboard',
  'demo',
]

const asynLoad = e => loadable({
  loader: () => import(`./pages/${e}`),
  loading: () => 'Loading', // TODO replace with placeholder
})

export const routeMap = [
  { key: 'Home', path: '/', exact: true, component: PageHome },
  ...asyncPages.map(e => ({
    key: `${capitalize(e)}`,
    path: `/${e}`,
    component: asynLoad(e),
  })),
]

// eslint-disable-next-line react/display-name
const Routing = ({ routes }) => (
  <Switch>{routes.map(e => <Route key={e.key} {...e} />)}</Switch>
)

const WebRouter = () => (
  <Router history={history}>
    <>
      <NavigationHeader/>
      <Routing routes={routeMap} />
    </>
  </Router>
)

export default WebRouter
