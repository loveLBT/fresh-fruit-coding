import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const vip_card_300 = require('@images/icon/vip_card_300.png')
const vip_card_500 = require('@images/icon/vip_card_500.png')

class VipBar extends Component {
  render() {
    return (
      <View className='vip-bar'>
        <Text className='title'>VIP充值</Text>
        <View className='wrapper'>
          <Image className='img' src={vip_card_300} />
          <Image className='img' src={vip_card_500} />
        </View>
      </View>
    )
  }
}

export default VipBar