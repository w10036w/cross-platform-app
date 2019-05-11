
import React from 'react'
import { withRouter, Link } from 'react-router-dom'

export default withRouter(({ history, location }) =>
// const currPage = location.pathname.substr(1) || 'home'

  (
    <div>
      <span>Navigation header </span>
      <Link to="/">Home</Link>{' '}
      <Link to="/dashboard">dashboard</Link>{' '}
      <Link to="/protected">protected</Link>
    </div>
  ))

