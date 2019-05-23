import React from 'react'
import { getCtx } from '~noctx'
import Log from '~comp/global/debug/log'

const Button = ({ onClick }) => (
  <div>
    <Log msg="test-button" />
    <button onClick={onClick}>addTest</button>
  </div>
)

const ButtonContainer = React.memo(Button)
// eslint-disable-next-line react/display-name
const MemoButton = () => {
  const { setTest } = getCtx('test')

  // const onClick = () => setTest(c => c+ 1)
  const onClick = React.useCallback(
    () => {
      setTest(c => c + 1)
    },
    [setTest],
  )
  return (
    <div>
      <Log msg="test-button-container" />
      <ButtonContainer onClick={onClick}/>
    </div>
  )
}

// eslint-disable-next-line react/display-name
// const CountNode = () => {
//   const { count, increaseCount } = getCtx('count')
//   return (
//     <>
//       <p>test: {count}</p>
//       <button onClick={increaseCount}>addCount</button>
//     </>
//   )
// }

const TestNode = () => {
  // const [{ test }] = getCtx(['test'])
  const [{ test }, { count, increaseCount }] = getCtx(['test', 'count'])
  // const [{ count, increaseCount }] = getCtx(['count'])

  const CountNode = () => (
    <>
      <p>test: {count}</p>
      <button onClick={increaseCount}>addCount</button>
    </>
  )
  const MemoCountNode = React.memo(CountNode)

  return (
    <div>
      <p>test: {test}</p>
      <MemoButton />
      {/* <p>test: {count}</p>
      <button onClick={increaseCount}>addCount</button> */}
      {/* <CountNode/> */}
      <MemoCountNode/>
    </div>
  )
}

export default React.memo(TestNode)