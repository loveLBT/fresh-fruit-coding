import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { toJS } from 'mobx'

import HeaderBar from './HeaderBar'
import TagsBar from './TagsBar'
import './index.scss'

class Search extends Component {
  config = {
    navigationStyle: 'custom'
  }
  render() {    
    return (
      <View className='page search'>
        <TagsBar 
          title='历史搜素'
          clearText='清楚历史记录'
          onClear={() => {
            console.log("aaa")
          }}
        />
        <TagsBar 
          title='热门搜素'
        />
      </View>
    )
  }
}

export default Search