import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import MessageList from './MessageList'
import './index.scss'

class AccountManage extends Component {
  config = {
    navigationBarTitleText: '账号管理'
  }
  render() {
    return (
      <View className='page account-manage'>
        <MessageList />
      </View>
    )
  }
} 

export default AccountManage