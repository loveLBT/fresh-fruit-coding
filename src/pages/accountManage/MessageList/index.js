import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import MessageItem from '../MessageItem'
import './index.scss'

class MessageList extends Component {
  render() {
    return (
      <View className='message-list'>
        <MessageItem />
      </View>
    )
  }
}

export default MessageList