import { useState, useEffect } from 'react'

export default function useAnimationTimer(duration = 1000, delay = 0) {
  const [elapsed, setTime] = useState(0)

  useEffect(
    () => {
      let animationFrame
      let timerStop
      let start

      // Call onFrame() on next animation frame
      function loop(fn) {
        animationFrame = requestAnimationFrame(fn)
      }

      // Function to be executed on each animation frame
      function onFrame() {
        setTime(Date.now() - start)
        loop(onFrame)
      }

      function onStart() {
        // Set a timeout to stop things when duration time elapses
        timerStop = setTimeout(() => {
          cancelAnimationFrame(animationFrame)
          setTime(Date.now() - start)
        }, duration)

        // Start the loop
        start = Date.now()
        loop(onFrame)
      }

      // Start after specified delay (defaults to 0)
      const timerDelay = setTimeout(onStart, delay)

      // Clean things up
      return () => {
        clearTimeout(timerStop)
        clearTimeout(timerDelay)
        cancelAnimationFrame(animationFrame)
      }
    },
    [duration, delay] // Only re-run effect if duration or delay changes
  )

  return elapsed
}
