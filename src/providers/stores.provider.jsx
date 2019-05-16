/**
 * collection of business stores
 */
import React from 'react'
import ProgressCtx from '../stores/global/progress'


const StoreProvider = ({ children }) => (
  <ProgressCtx.Provider>
    {children}
  </ProgressCtx.Provider>
)

export default StoreProvider