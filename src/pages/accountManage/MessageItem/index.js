import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class MessageItem extends Component {
  render() {
    return (
      <View className='message-item'>
        <View className='title'>
          <Text className='txt'>优惠券到账啦！</Text>
        </View>
        <View className='content'>
          <Text className='txt'>
            恭喜您，成功领取了价值200的新手礼包优惠券，点击产看恭喜您，成功领取了价值200的新手礼包优惠券，点击产看...
          </Text>
          <View className='img'></View>
        </View>
      </View>
    )
  }
}

export default MessageItem