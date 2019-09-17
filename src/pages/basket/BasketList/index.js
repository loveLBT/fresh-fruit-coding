import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import BasketItem from '../BasketItem'
import './index.scss'

class BasketList extends Component {
  static defaultProps = {
    data: [
      {title: '东南亚进口香蕉', img: require('@images/fruit-1.png'), price: 11.9, vipPrice: 8.8, id: 1, num: 1},
      {title: '泰国山竹', img: require('@images/fruit-2.png'), price: 14.9, vipPrice: 9.9, id: 2, num: 1},
      {title: '东南亚进口香蕉', img: require('@images/fruit-1.png'), price: 19.9, vipPrice: 12.9, id: 3, num: 1},
    ]
  }
  render() {
    const { data } = this.props

    return (
      <View className='basket-list'>
        {data.map((item) => 
          <BasketItem 
            key={item.id}  
            img={item.img}
            title={item.title}
            vipPrice={item.vipPrice}
            price={item.price}
          />
        )}
      </View>
    )
  }
}

export default BasketList