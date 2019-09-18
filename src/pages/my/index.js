import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import HeaderBar from './HeaderBar'
import CategoryBar from './CategoryBar'
import OrderStatusBar from './OrderStatusBar'
import VipBar from './VipBar'
import ServiceBar from './ServiceBar'
import './index.scss'

class My extends Component {
  config = {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  }
  render() {
    return (
      <View className='my'>
        <HeaderBar />
        <CategoryBar />
        <OrderStatusBar />
        <VipBar />
        <ServiceBar />
      </View>
    )
  }
}

export default HeaderBar