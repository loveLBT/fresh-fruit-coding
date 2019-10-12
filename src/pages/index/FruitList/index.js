import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const basketIcon = require('@images/icon/basket.png')

class FruitList extends Component {
  static defaultProps = {
    data: [
      {title: '东南亚进口香蕉', img: require('@images/fruit-1.png'), price: 11.9, scalPrice: 8.8, id: 1},
      {title: '泰国山竹', img: require('@images/fruit-2.png'), price: 14.9, scalPrice: 9.9, id: 2},
      {title: '东南亚进口香蕉', img: require('@images/fruit-1.png'), price: 19.9, scalPrice: 12.9, id: 3},
    ]
  }
  render() {
    const { data } = this.props

    return (
      <View className='fruit-list'>
        {data.map((item) => 
          <View key={item.id} className='fruit-item'>
            <Image className='img' src={item.img} />
            <Text className='name'>{item.title}</Text>
            <View className='info'>
              <View className='price'>
                <Text className='original'>￥{item.scalPrice}</Text>
                <Text className='scal'>￥{item.price}</Text>
              </View>
              <Image className='basket' src={basketIcon} />
            </View>
          </View>
        )}
      </View>
    )
  }
}

export default FruitList