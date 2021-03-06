import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image  } from '@tarojs/components'
import { AtSwipeAction } from "taro-ui"

import RadioBar from '@components/RadioBar'
import ASInput from '@components/ASInput'
import './index.scss'

class BasketItem extends Component {
  onRemove = () => {
    
  }
  render() {
    const { img, title, vipPrice, price } = this.props

    return (
      <AtSwipeAction
        onClick={this.onRemove.bind(this)}
        options={[
          {
            text: '删除',
            style: {
              backgroundColor: '#ff4949',
              marginBottom: '30px'
            }
          }
        ]}
      >
        <View className='basket-item'>
          <RadioBar />
          <Image className='img' src={img} />
          <View className='info'>
            <Text className='name'>{title}</Text>
            <View className='price'>
              <Text className='price1'>￥{vipPrice}</Text>
              <Text className='price2'>￥{price}</Text>
            </View>
          </View>
          <View className='asinput'>
            <ASInput />
          </View>
        </View>
      </AtSwipeAction>
    )
  }
}

export default BasketItem