import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class CategoryBar extends Component {
  render() {
    return (
      <View className='category-bar'>
        <View className='category'>
          <Text className='label'>VIP余额</Text>
          <Text className='value'>0</Text>
        </View>
        <View className='category'>
          <Text className='label'>积分</Text>
          <Text className='value'>0</Text>
        </View>
        <View className='category'>
          <Text className='label'>优惠券</Text>
          <Text className='value'>0</Text>
        </View>
      </View>
    )
  }
}

export default CategoryBar