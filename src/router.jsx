import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable'
import { camelCase } from 'lodash'
import NavigationHeader from './components/global/navigation-header'
import PageHome from './pages/home'
import { history } from '~store'

// history.listen((location, action) => {
//   console.log(`[history] ${action} ${location.pathname}, ${location.state}`)
// })
// createBrowserHistory({
//   basename: '', // The base URL of the app (see below)
//   forceRefresh: false, // Set true to force full page refreshes
//   keyLength: 6, // The length of location.key
//   // A function to use to confirm navigation with the user (see below)
//   getUserConfirmation: (message, callback) => callback(window.confirm(message))
// });

const asyncPages = [
  'protected',
  'dashboard',
]

const asynLoad = e => loadable({
  loader: () => import(`./pages/${e}`),
  loading: () => 'Loadding', // TODO replace with placeholder
})

export const routes = [
  { key: 'PageHome', path: '/', exact: true, component: PageHome },
  ...asyncPages.map(e => ({
    key: `Page${camelCase(e)}`,
    path: `/${e}`,
    component: asynLoad(e),
  })),
]

const WebRouter = () => (
  <Router history={history}>
    <>
      <NavigationHeader/>
      <Switch>{routes.map(e => <Route key={e.key} {...e} />)}</Switch>
    </>
  </Router>
)

export default WebRouter
