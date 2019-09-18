import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import BasketList from './BasketList'
import SeasonBar from './SeasonBar'
import SettlementBar from './SettlementBar'
import './index.scss'

class Basket extends Component {
  config = {
    navigationBarTitleText: '果篮'
  }
  render () {
    return (
      <View className='page basket'>
        <BasketList />
        <SeasonBar />
        <SettlementBar />
      </View>
    )
  }
}

export default Basket 
