import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Tag from '@components/Tag'
import './index.scss'

class TagsBar extends Component {
  static defaultProps = {
    title: '',
    tags: [], 
    clearText: ''
  }
  
  render() {
    const { title, tags, clearText } = this.props

    return (
      <View className='tags-bar'>
        <View className='title'>
          <Text className='txt'>{title}</Text>
          {clearText && 
            <Text 
              className='clear'
              onClick={this.props.onClear}
            >
              {clearText}
            </Text>
          }
          
        </View>
        
        <View className='wrapper'>
          <View className='tag'>
            <Tag my-class='tag' size='small' name='葡萄' />
          </View>
          <View className='tag'>
            <Tag my-class='tag' size='small' name='桃子' />
          </View>
          <View className='tag'>
            <Tag my-class='tag' size='small' name='泰国香蕉' />
          </View>
        </View>
      </View>
    )
  }
}

export default TagsBar