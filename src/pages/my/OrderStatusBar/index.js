import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const allIcon = require('@images/icon/all.png')
const waitPayIcon = require('@images/icon/waitPay.png')
const waitDeliveryIcon = require('@images/icon/waitDelivery.png')
const waitEvaluateIcon = require('@images/icon/waitEvaluate.png')
const backPayIcon = require('@images/icon/backPay.png')

class OrderStatusBar extends Component {
  render() {
    return (
      <View className='order-status-bar'>
        <Text className='title'>我的订单</Text>
        <View className='wrapper'>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={allIcon} />
              <View className='tag'>
                <Text className='value'>···</Text>
              </View>
            </View>
            <Text className='txt'>全部</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={waitPayIcon} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>待付款</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={waitDeliveryIcon} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>待配送</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={waitEvaluateIcon} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>待评价</Text>
          </View>
          <View className='item'>
            <View className='img'>
              <Image className='img' src={backPayIcon} />
              <View className='tag'>
                <Text className='value'>12</Text>
              </View>
            </View>
            <Text className='txt'>退款/售后</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default OrderStatusBar