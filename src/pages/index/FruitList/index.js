import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import FruitItem from '../FruitItem'
import './index.scss'

class FruitList extends Component {
  static defaultProps = {
    data: [
      {title: '东南亚进口香蕉', img: require('@images/fruit-1.png'), price: 11.9, vipPrice: 8.8, id: 1},
      {title: '泰国山竹', img: require('@images/fruit-2.png'), price: 14.9, vipPrice: 9.9, id: 2},
      {title: '东南亚进口香蕉', img: require('@images/fruit-1.png'), price: 19.9, vipPrice: 12.9, id: 3},
      /*{title: '东南亚进口香蕉', img: require('../../../images/fruit-1.png'), price: 11.9, vipPrice: 8.8, id: 4},
      {title: '泰国山竹', img: require('../../../images/fruit-2.png'), price: 14.9, vipPrice: 9.9, id: 5},
      {title: '东南亚进口香蕉', img: require('../../../images/fruit-1.png'), price: 19.9, vipPrice: 12.9, id: 6}*/
    ]
  }
  render() {
    const { data } = this.props

    return (
      <View className='fruit-list'>
        {data.map((item) => 
          <FruitItem 
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

export default FruitList