import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { routeMap } from '../../../router'
import { NavStyle, NavItemStyle } from './navigation-header.style'

const Tabs = ({ routes }) => (
  <>
    {routes.map(e => (
      <NavItemStyle key={e.key}>
        <Link to={e.path}>{e.key}</Link>
      </NavItemStyle>
    ))}
  </>
)

export default withRouter(({ history, location }) => (
  // const currPage = location.pathname.substr(1) || 'home'

  <NavStyle>
    <Tabs routes={routeMap} />
  </NavStyle>
))
