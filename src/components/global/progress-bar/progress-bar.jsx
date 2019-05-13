import React from 'react'
import { Progress } from '@ant-design/react-native'
import styled from '@emotion/native'

const ProgressHolder = styled.View`
display: flex;
position: absolute;
top: 0;
left: 0;
height: 4px;
width: 100%;
`
const barStyle = {
  borderColor: 'red',
}

const ProgressBar = ({ percent }) => (
  <ProgressHolder>
    <Progress percent={percent} unfilled={false} barStyle={barStyle} />
  </ProgressHolder>
)

export default ProgressBar
