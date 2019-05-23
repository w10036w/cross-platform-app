import { useState, useMemo } from 'react'
import { setCtx } from '~noctx'

function useTest(initState = 0) {
  const [test, setTest] = useState(initState)
  return useMemo(() => ({ test, setTest }), [test])
  // return { test, setTest }
}

const store = setCtx('test', useTest)

export const Provider = store.Provider
export default store