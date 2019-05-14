import React from 'react'
import { Text } from 'react-native'
import { withRouter, Link } from 'react-router-native'
import { NavStyle, NavItemStyle } from './navigation-header.style'

export default withRouter(({ history, location }) => {
  const currPage = location.pathname.substr(1)

  return (
    <NavStyle>
      <NavItemStyle>
        <Link to="/" underlayColor="#f0f4f7">
          <Text>Home</Text>
        </Link>
      </NavItemStyle>
      <NavItemStyle>
        <Link to="/dashboard" underlayColor="#f0f4f7">
          <Text>dashboard</Text>
        </Link>
      </NavItemStyle>
      <NavItemStyle>
        <Link to="/protected" underlayColor="#f0f4f7">
          <Text>protected</Text>
        </Link>
      </NavItemStyle>
    </NavStyle>
  )
})
