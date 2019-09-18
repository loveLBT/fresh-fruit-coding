import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const addIcon = require('@images/icon/add.png')

class AddAddress extends Component {
  render() {
    return (
      <View className='add-address'>
        <Image className='img' src={addIcon} />
        <Text className='txt'>选择收货地址</Text>
      </View>
    )
  }
}

export default AddAddress