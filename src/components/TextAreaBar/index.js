import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'

import './index.scss'

class TextAreaBar extends Component {
  render() {
    const { title, placeholder } = this.props

    return (
      <View className='textarea-bar'>
        <Text className='label'>{title}</Text>
        <Textarea           
          className='textarea'
          placeholder={placeholder} 
          autoHeight
        />
      </View>
    )
  }
}

export default TextAreaBar