import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import RadioBar from '@components/RadioBar'
import './index.scss'

class SettlementBar extends Component {
  render() {
    return (
      <View className='settlement-bar'>
        <RadioBar>全选</RadioBar>
        <View className='settlement'>
          <Text className='count-label'>合计：</Text>
          <Text className='count-value'>￥0</Text>
          <View className='btn'>
            <Text className='txt'>结算</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default SettlementBar