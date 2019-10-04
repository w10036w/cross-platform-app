import React from 'react'
import { View } from 'react-native'
// import FetchExample from '~comp/_example'

// todo why is this rerendered for progress update
const PageExampleDemo = () => (
  <View>
    <div>hello</div>
    {/* <FetchExample/> */}
  </View>
)

export default React.memo(PageExampleDemo)
