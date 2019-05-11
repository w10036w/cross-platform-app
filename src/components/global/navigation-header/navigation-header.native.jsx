import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { withRouter, Link } from 'react-router-native'

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
})

export default withRouter(({ history, location }) => {
  const currPage = location.pathname.substr(1)

  return (
    <View style={styles.nav}>
      <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Home</Text>
      </Link>
      <Link to="/dashboard" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>dashboard</Text>
      </Link>
      <Link to="/protected" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>protected</Text>
      </Link>
    </View>
  )
})

