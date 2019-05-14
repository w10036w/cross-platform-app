/**
 * collection of business containers
 */
import React from 'react'
import Routes from './router'
import ProgressCtx from './stores/global/progress'


const Business = () => (
  <ProgressCtx.Provider>
    <Routes />
  </ProgressCtx.Provider>
)

export default Business