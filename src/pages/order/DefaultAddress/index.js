import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import Tag from '@components/Tag'
import './index.scss'

const arrow_right = require('@images/icon/arrow_right.png')

class DefaultAddress extends Component {
  render() {
    return (
      <View className='default-address'>
        <View className='info'>
          <View className='user'>
            <Tag type='primary' size='small' name='默认' />
            <Text className='name'>李步挺</Text>
            <Text className='phone'>13575407573</Text>
          </View>
          <Text className='address'>
            浙江省温州市苍南县桥墩镇玉松路15号
          </Text>
        </View>
        <Image className='icon' src={arrow_right} />
      </View>
    )
  }
}

export default DefaultAddress