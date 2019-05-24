import React from 'react'
import { getCtx } from '~noctx'
import ProgressBar from './progress-bar'


const ProgressBarContainer = () => {
  const { pct } = getCtx('progress')

  return (
    <ProgressBar percent={pct} />
  )
}


export default ProgressBarContainer