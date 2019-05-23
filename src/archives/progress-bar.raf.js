import { useState } from 'react'
import { createContainer } from 'unstated-next'

const normalStep = 0.5
const largeStep = 2
const pausePct = 80
const fullPct = 100

function useProgress() {
  const [pct, setPct] = useState(0)
  let rafId

  const reset = (atPct = 0) => {
    cancelAnimationFrame(rafId)
    rafId = null
    if (atPct !== -1) {
      setPct(() => atPct)
    }
  }

  const start = () => {
    reset(0)
    const rafFn = () => {
      setPct(value => (Math.floor(value) <= pausePct ? value + normalStep : value))
      rafId = requestAnimationFrame(rafFn)
    }
    rafId = requestAnimationFrame(rafFn)
  }
  const complete = () => {
    reset(-1)
    const rafFn = () => {
      setPct(value => {
        const currPct = Math.floor(value)
        if (currPct < fullPct) {
          rafId = requestAnimationFrame(rafFn)
          return value + largeStep
        }
        cancelAnimationFrame(rafId)
        return 0
      })
    }
    rafId = requestAnimationFrame(rafFn)
  }
  return { percent: pct, start, complete }
}

export default createContainer(useProgress)
