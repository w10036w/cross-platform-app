/* eslint-disable react/jsx-key */
import React from 'react'
import { Button, Text, View } from 'react-native'
import { Router, Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable'
import { createBrowserHistory } from 'history'
import { camelCase } from 'lodash'
import NavigationHeader from './components/global/navigation-header'
import ProgressBar from './components/global/progress-bar'
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
]

const asynLoad = e => loadable({
  loader: () => import(`./${e}`),
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

/* eslint-disable-next-line react/display-name */
export default ({ progressBar }) => (
  <Router history={history}>
    <>
      <ProgressBar percent={progressBar.state.pct} />
      <NavigationHeader/>
      <>
        <View>
          <Text>Example of how to manage the pregression bar</Text>
          <Text>when page mounts (e.g. componentDidMount()) trigger the start()</Text>
          <Text>after data fetched / rendered trigger complete()</Text>
        </View>
        <Button onPress={() => progressBar.start()} title="restart" />
        <Button onPress={() => progressBar.complete()} title="complete" />

      </>
      <Switch>{routes.map(e => <Route key={e.key} {...e} />)}</Switch>
    </>
  </Router>
)


