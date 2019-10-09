import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer } from 'mobx-react'

import SwiperBar from './SwiperBar'
import CategoryBar from './CategoryBar'
import FruitList from './FruitList'
import SearchBar from './SearchBar/'
import store from '@store'

import './index.scss'

const { profileStore } = store

class Index extends Component {
	config = {
    enablePullDownRefresh: true
  }
  render () {
    return (
      <View className='page index'>
        <View className='bar'>
        	<SearchBar />
        	<View className='swiperBar/'>
        		<SwiperBar />
        	</View>
        </View>
       <CategoryBar />
       <FruitList />
      </View>
    )
  }
}

export default Index 
