import { useState, useMemo } from 'react'
import { setCtx } from '~noctx'

function useCount(initState = 0) {
  const [count, setCount] = useState(initState)
  const increaseCount = () => setCount(c => c + 1)
  return useMemo(() => ({ count, increaseCount }), [count])
  // return { count, increaseCount }
}

const store = setCtx('count', useCount)

export const Provider = store.Provider
export default store