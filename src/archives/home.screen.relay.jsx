import React from 'react'
import { Button, View, Text } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import { environment } from '../../relay-env'
import { history } from '../router'
import { START } from '~const'

const staticGql = graphql`
  query homeScreenQuery {
    todo(id:1) {
      id
      title
    }
  }
`

const ScreenHome = () => (
  <View>
    <Text>Home Screen</Text>
    <Text>Cross App {START}</Text>
    <Text>programmatic location pathnamee: {history.location.pathname}</Text>
    <Button onPress={() => history.push('/dashboard')} title="Go dashboard" />
    <Button onPress={() => history.push('/protected')} title="Go protected" />
    <QueryRenderer
      environment={environment}
      query={staticGql}
      render={({ error, props }) => {
        if (error) return <Text>error</Text>
        if (!props) return <Text>Loading...</Text>
        return <Text>{props.todo.id} {props.todo.title}</Text>
      }} />
  </View>
)

export default ScreenHome