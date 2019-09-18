import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class ActionBar extends Component {
  render() {
    return (
      <View className='action-bar'>
        <View className='price-tip'>
          <Text className='label'>应付金额：</Text>
          <Text className='value'>￥31.8</Text>
        </View>
        <View className='submit-btn'>
          <Text className='txt'>提交表单</Text>
        </View>
      </View>
    )
  }
}
