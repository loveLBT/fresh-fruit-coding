import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'

import './index.scss'

const searchIcon = require('@styles/icon/search.png')

class SearchInput extends Component {
  render() {
    return (
      <View className='search-input'>
        <Image className='icon' src={searchIcon} />
        <Input 
          className='input' 
          placeholder='搜索商品'
          placeholderClass='placeholderClass'
        />
      </View>
    )
  }
}

export default SearchInput