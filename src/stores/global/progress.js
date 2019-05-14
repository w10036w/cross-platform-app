import { useState, useRef } from 'react'
import { createContainer } from 'unstated-next'

const normalStep = 0.5
const largeStep = 4
const pausePct = 80
const fullPct = 100

function useProgress() {
  let interId
  const [pct, setPct] = useState(0)
  const refPct = useRef(pct)
  const start = () => {
    setPct(0)
    interId = setInterval(() => {
      setPct(currPct => {
        if (currPct < pausePct) {
          return currPct + normalStep
        }
        clearInterval(interId)
        return currPct
      })
    }, 16)
  }

  const complete = () => {
    clearInterval(interId)

    // const currPct = refPct.currPct
    // interId = setInterval(() => {
    //   if (currPct !== 0 && currPct < fullPct) {
    //     setPct(currPct + largeStep)
    //   } else {
    //     clearInterval(interId)
    //     setPct(0)
    //   }
    // }, 16)

    interId = setInterval(() => {
      setPct(currPct => {
        if (currPct !== 0 && currPct < fullPct) {
          return currPct + largeStep
        }
        clearInterval(interId)
        return 0
      })
    }, 16)
  }

  return { pct, start, complete }
}

export default createContainer(useProgress)