import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const startIcon = require('@images/icon/start.png')
const positionIcon = require('@images/icon/position.png')
const aboutIcon = require('@images/icon/about.png')
const deliveryIcon = require('@images/icon/delivery.png')
const questionIcon = require('@images/icon/question.png')
const settingIcon = require('@images/icon/setting.png')

class ServiceBar extends Component {
  render() {
    return (
      <View className='service-bar'>
        <Text className='title'>我的服务</Text>
        <View className='wrapper'>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-start' src={startIcon} />
            </View>
            <Text className='txt'>我的收藏</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-position' src={positionIcon} />
            </View>
            <Text className='txt'>地址管理</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-about' src={aboutIcon} />
            </View>
            <Text className='txt'>关于我们</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-delivery' src={deliveryIcon} />
            </View>
            <Text className='txt'>配送说明</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-question' src={questionIcon} />
            </View>
            <Text className='txt'>退货说明</Text>
          </View>
          <View className='item'>
            <View className='img-container'>
              <Image className='img icon-setting' src={settingIcon} />
            </View>
            <Text className='txt'>设置</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default ServiceBar