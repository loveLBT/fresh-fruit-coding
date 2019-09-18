import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import TextAreaBar from '@components/TextAreaBar'
import DefaultAddress from './DefaultAddress'
import AddAddress from './AddAddress'
import FruitBar from './FruitBar'
import InfoBar from './InfoBar'
import ActionBar from './ActionBar'


class Order extends Component {
 config = {
    navigationBarTitleText: '填写订单'
  }
  render() {
    return (
      <View className='page order'>
        <AddAddress />
        <FruitBar />
        <InfoBar />
        <TextAreaBar 
          title='留言'
          placeholder='请输入留言'
        />
        <ActionBar />
      </View>
    )
  }
}

export default Order