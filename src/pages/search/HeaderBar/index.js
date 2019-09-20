import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import classnames from  'classnames'

import NavBar from '@components/NavBar'
import SearchInput from '../SearchInput'
import './index.scss'

class HeaderBar extends Component {	
  static defaultProps = {
    systemInfo: {}  
  }
  
  render() {
    const { systemInfo } = this.props

    return (
      <NavBar
        statusBarHeight ={systemInfo.statusBarHeight}
      >
        <View className='header-bar'>
          <SearchInput />
        </View>
      </NavBar>
    )
  }
}

export default HeaderBar