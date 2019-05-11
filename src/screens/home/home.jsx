import React from 'react'
import { Button, View, Text } from 'react-native'
import { history } from '../../router'

// eslint-disable-next-line react/display-name
export default () => (
  <View>
    <Text>Home Screen</Text>
    <Text>programmatic location pathname: {history.location.pathname}</Text>
    <Button onPress={() => history.push('/dashboard')} title="Go dashboard" />
    <Button onPress={() => history.push('/protected')} title="Go protected" />
  </View>
)
