/* eslint-disable react/jsx-key */
/**
 * collection of business stores
 */
import React from 'react'
import { Provider as TestProivder } from '../stores/global/test'
import { Provider as CountProivder } from '../stores/global/count'

const StoreProvider = ({ children }) => (
  <TestProivder>
    <CountProivder initValue={2}>
      {children}
    </CountProivder>
  </TestProivder>
)

export default StoreProvider