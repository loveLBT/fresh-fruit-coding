import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import classnames from  'classnames'

import NavBar from '@components/NavBar'
import './index.scss'

const searchIcon = require('@images/icon/search.png')

class HeaderBar extends Component {	  
  render() {

    return (
      <NavBar
        backgroundColor='#f5f5f5'
      >
        <View className='header-bar'>
          <AtIcon value='chevron-left'></AtIcon>
          <View className='search'>
            <Image className='icon' src={searchIcon} />
            <Input 
              className='input' 
              placeholder='搜索商品'
              placeholderClass='placeholderClass'
            />
          </View>
        </View>
      </NavBar>
    )
  }
}

export default HeaderBar