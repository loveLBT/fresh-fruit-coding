import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import FruitList from '../../index/FruitList'
import './index.scss'

class SeasonBar extends Component {
  render() {
    return (
      <View className='season-bar'>
        <Text className='title'>时令水果</Text>
        <FruitList />
      </View>
    )
  }
}

export default SeasonBar