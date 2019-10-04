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
      <NavItemStyle>
        <Link to="/demo" underlayColor="#f0f4f7">
          <Text>example-demo</Text>
        </Link>
      </NavItemStyle>
    </NavStyle>
  )
})


// import React from 'react'
// import { withRouter, Link } from 'react-router-native'
// import { routeMap, history } from '~router'
// import { NavStyle, NavItemStyle } from './navigation-header.style'

// const Tabs = ({ routes }) => (
//   <NavStyle>
//     {routes.map(e => (
//       <NavItemStyle key={e.key}>
//         <Link to={e.path}>{e.key}</Link>
//       </NavItemStyle>
//     ))}
//   </NavStyle>
// )

// export default withRouter(({ history, location }) => {
//   const currPage = location.pathname.substr(1)

//   return (

//     <Tabs routes={routeMap} />
//   )
// })
