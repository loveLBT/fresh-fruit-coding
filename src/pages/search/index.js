import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import HeaderBar from './HeaderBar'
import TagsBar from './TagsBar'
import './index.scss'

class Search extends Component {
  config = {
    navigationStyle: 'custom'
  }
  render() {
    return (
      <View className='search'>
        <HeaderBar />
        <TagsBar 
          title='历史搜素'
        />
        <TagsBar 
          title='热门搜素'
        />
      </View>
    )
  }
}

export default Search