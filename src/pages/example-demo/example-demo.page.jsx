import React from 'react'
import { View } from 'react-native'
import FetchExample from '~comp/_example'

// todo why is this rerendered for progress update
const PageExampleDemo = () => (
  <View>
    <FetchExample/>
  </View>
)

export default React.memo(PageExampleDemo)
