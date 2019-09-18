import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import FruitItem from '../FruitItem'
import './index.scss'

class FruitBar extends Component {
  render() {
    return (
      <View className='fruit-bar'>
        <Text className='title'>共3件商品</Text>
        <View className='wrapper'>
          <FruitItem />
        </View>
      </View>
    )
  }
}

export default FruitBar