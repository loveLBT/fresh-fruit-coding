import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

class InputBar extends Component {
  static defaultProps = {
    border: true,
    placeholder: '',
    title: ''
  }
  render() {
    const { title, placeholder, border } = this.props

    return (
      <View className={classnames('input-bar', {'border': border})}>
        <Text className='label'>{title}</Text>
        <Input           
          className='input'
          placeholder={placeholder} 
        />
      </View>
    )
  }
}

export default InputBar