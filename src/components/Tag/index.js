import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

class Tag extends Component {
  render() {
    const { name, type, size } = this.props
    return (
      <View className={classnames('tag', {'primary': type === 'primary', 'small': size === 'small'})}>
        <Text className='txt'>{name}</Text>
      </View>
    )
  }
}

export default Tag