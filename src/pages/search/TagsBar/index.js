import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Tag from '@components/Tag'
import './index.scss'

class TagsBar extends Component {
  render() {
    const { title } = this.props

    return (
      <View className='tags-bar'>
        <Text className='title'>{title}</Text>
        <View className='wrapper'>
          <Tag name='葡萄' />
          <Tag name='桃子' />
          <Tag name='泰国香蕉' />
        </View>
      </View>
    )
  }
}

export default TagsBar