import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import Tag from '@components/Tag'
import './index.scss'

const arrow_right = require('@images/icon/arrow_right.png')

class DefaultAddress extends Component {
  static defaultProps = {
    isDefault: false,
    selected: false,
    edit: false  
  }
  
  render() {
    const { isDefault, selected, edit } = this.props

    return (
      <View className='address-item'>
        <View className='info'>
          <View className='user'>
            {isDefault && 
              <View className='tag'>
                <Tag type='primary' size='small' name='默认' />
              </View>
            }
            
            <Text className='name'>李步挺</Text>
            <Text className='phone'>13575407573</Text>
          </View>
          <Text className='address'>
            浙江省温州市苍南县桥墩镇玉松路15号
          </Text>
        </View>
        {selected && 
          <Image className='icon' src={arrow_right} />
        }
      </View>
    )
  }
}

export default DefaultAddress