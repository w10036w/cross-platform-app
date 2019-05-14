import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { NavStyle, NavItemStyle } from './navigation-header.style'

export default withRouter(({ history, location }) => (
  // const currPage = location.pathname.substr(1) || 'home'

  <NavStyle>
    <NavItemStyle>
      <Link to="/">Home</Link>
    </NavItemStyle>
    <NavItemStyle>
      <Link to="/dashboard">dashboard</Link>
    </NavItemStyle>
    <NavItemStyle>
      <Link to="/protected">protected</Link>
    </NavItemStyle>
  </NavStyle>
))
