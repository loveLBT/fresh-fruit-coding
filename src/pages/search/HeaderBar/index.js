import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import SearchInput from '../SearchInput'
import './index.scss'

class HeaderBar extends Component {
  render() {
    return (
      <View className='header-bar'>
        <AtIcon value='chevron-left'></AtIcon>
        <SearchInput />
      </View>
    )
  }
}

export default HeaderBar