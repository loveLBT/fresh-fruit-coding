import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import InputBar from '@components/InputBar'
import RadioGroupBar from '@components/RadioGroupBar'

class AddAddress extends Component {
  config = {
    navigationBarTitleText: '新增收货地址'
  }
  render() {
    return (
      <View className='page addAddress'>
        <InputBar title='收货人' placeholder='请输入收货人' />
        <RadioGroupBar title='性别' />
        <InputBar title='联系方式' placeholder='请输入联系方式' />
        <AtButton className='b-btn' type='primary' full={true}>保存</AtButton>
      </View>
    )
  }
}

export default AddAddress