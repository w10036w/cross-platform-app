import React from 'react'
import { Text, View } from 'react-native'
import { Router, Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable'
import { createBrowserHistory } from 'history'
import { capitalize } from 'lodash'
import NavigationHeader from './components/global/navigation-header'
import PageHome from './pages/home'

export const history = createBrowserHistory()

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
  'example-demo',
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
const Routing = React.memo(({ routes }) => (
  <Switch>{routes.map(e => <Route key={e.key} {...e} />)}</Switch>
))

// todo use Portal for progress bar and nest
const WebRouter = () => (
  <Router history={history}>
    <>
      <NavigationHeader/>
      <>
        <View>
          <Text>Example of managing the progress bar</Text>
          <Text>when page mounts (e.g. componentDidMount()) trigger the start()</Text>
          <Text>after data fetched / rendered trigger complete()</Text>
        </View>
      </>
      <Routing routes={routeMap} />
    </>
  </Router>
)

export default WebRouter
