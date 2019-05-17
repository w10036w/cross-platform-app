/* eslint-disable no-void */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

export const useMount = fn => useEffect(() => void fn(), [])

export const useUnmount = fn => useEffect(() => fn, [])

export const useUpdate = fn => {
  const mounting = useRef(true)
  useEffect(() => {
    if (mounting.current) {
      mounting.current = false
    } else {
      fn()
    }
  })
}

export const useForceUpdate = () => useState(0)[1]
