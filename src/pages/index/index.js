import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import SwiperBar from './SwiperBar'
import CategoryBar from './CategoryBar'
import FruitList from './FruitList'
import SearchBar from './SearchBar/'

import './index.scss'

@inject('profileStore', 'homeStore')
@observer
class Index extends Component {
	config = {
    enablePullDownRefresh: true
  }
  componentDidMount () {
    const { homeStore } = this.props
    homeStore.initData()
  }
  render () {
    const { profileStore, homeStore } = this.props
    const { locationInfo } = profileStore

    return (
      <View className='page index'>
        <View className='bar'>
        	<SearchBar 
            location={locationInfo.district}
          />
        	<View className='swiperBar/'>
        		<SwiperBar data={homeStore.swiperList} />
        	</View>
        </View>
       <CategoryBar data={homeStore.categoryList} />
       <FruitList data={homeStore.fruitList} />
      </View>
    )
  }
}

export default Index 
