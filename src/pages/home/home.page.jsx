import React from 'react'
import { Image, Text, View } from 'react-native'
import { history } from '~router'
import { START } from '~const'
import TestNode from './test-node'
import styles from './style'

const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'

// todo why is this rerendered for progress update
const PageHome = () => (
  <div>
    <h1>Home Page</h1>
    <p>programmatic location pathname: {history.location.pathname}</p>
    <div onClick={() => history.push('/dashboard')}><u>go to dashboard</u></div>
    <div onClick={() => history.push('/protected')}><u>go to protected</u></div>
    <View style={styles.header}>
      <TestNode/>
      <Image
        accessibilityLabel="React logo"
        source={{ uri: logoUri }}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>Cross App {START}</Text>
    </View>
  </div>
)

export default React.memo(PageHome)
