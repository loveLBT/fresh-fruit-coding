import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Tag from '@components/Tag'
import './index.scss'

class CouponItem extends Component {
  render() {
    return (
      <View className='coupon-item'>
        <View className='info'>
          <View className='introduce'>
            <Text className='name'>新人大礼包</Text>
            <Text className='amount'>￥3</Text>
            <Text className='condition'>满30可用</Text>
          </View>
          <Text className='time'>有效期至2019.08.27</Text>
        </View>
        <View className='tag'>
          <Tag name='去使用' type='primary' />
        </View>
        <View className='state'>
          <Text className='txt'>快过期</Text>
        </View>
      </View>
    )
  }
}

export default CouponItem