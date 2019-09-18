import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

class FruitItem extends Component {
  render() {
    return (
      <View className='fruit-item'>
        <Image className='img' src={require('@images/fruit-1.png')} />
        <View className='info'>
          <Text className='name'>泰国香蕉</Text>
          <Text className='price'>￥9.8</Text>
        </View>
        <View className='num'>
          <Text className='symbol'>X</Text>
          <Text className='txt'>1</Text>
        </View>
      </View>
    )
  }
}

export default FruitItem