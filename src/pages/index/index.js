import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import SwiperBar from './SwiperBar'
import CategoryBar from './CategoryBar'
import FruitList from './FruitList'
import './index.scss'

class Index extends Component {
  render () {
    return (
      <View className='page index'>
        <SwiperBar />
        <CategoryBar />
        <FruitList />
      </View>
    )
  }
}

export default Index 
