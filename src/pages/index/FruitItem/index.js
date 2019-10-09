import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const basketIcon = require('@images/icon/basket.png')

class FruitItem extends Component {
  static defaultProps = {
    img: '',
    title: '',
    vipPrice: 0,
    price: 0
  }
  render() {
    const { img, title, vipPrice, price } = this.props

    return (
      <View className='fruit-item'>
        <Image className='img' src={img} />
        <Text className='name'>{title}</Text>
        <View className='info'>
          <View className='price'>
            <Text className='original'>￥{vipPrice}</Text>
            <Text className='scal'>￥{price}</Text>
          </View>
          <Image className='basket' src={basketIcon} />
        </View>
      </View>
    )
  }
}

export default FruitItem