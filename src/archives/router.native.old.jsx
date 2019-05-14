/* eslint-disable react/jsx-key */
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { Router } from 'react-router'
import { Route } from 'react-router-native'
import { createMemoryHistory } from 'history'
import NavigationHeader from '../components/global/navigation-header'
import ProgressBar from '../components/global/progress-bar'
import ScreenHome from '../screens/home'
import ScreenDashboard from '../screens/dashboard'
import ScreenProtected from '../screens/protected'

export const history = createMemoryHistory()
// createMemoryHistory({
//   initialEntries: ['/'], // The initial URLs in the history stack
//   initialIndex: 0, // The starting index in the history stack
//   keyLength: 6, // The length of location.key
//   // A function to use to confirm navigation with the user. Required
//   // if you return string prompts from transition hooks (see below)
//   getUserConfirmation: null
// });

export const routes = [
  { key: 'ScreenHome', path: '/', component: ScreenHome, exact: true },
  { key: 'ScreenDashboard', path: '/dashboard', component: ScreenDashboard, exact: true },
  { key: 'ScreenProtected', path: '/protected', component: ScreenProtected, exact: true },
]

/* eslint-disable-next-line react/display-name */
export default ({ progressBar }) => (
  <Router history={history}>
    <View>
      <ProgressBar percent={progressBar.state.pct} />
      <NavigationHeader />
      <Button onPress={() => progressBar.start()} title="restart progress bar" />
      <Button onPress={() => progressBar.complete()} title="complete progress bar" />
      <Route exact path="/" component={ScreenHome} />
      <Route path="/dashboard" component={ScreenDashboard} />
      <Route path="/protected" component={ScreenProtected} />
    </View>
  </Router>
)
