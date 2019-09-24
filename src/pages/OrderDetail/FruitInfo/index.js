import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class FruitInfo extends Component {
	render() {
		return (
			<View className='fruit-info'>
				<View className='row'>
          <Text className='label'>商品合计</Text>
          <Text className='value'>￥31.8</Text>
        </View>
        <View className='row'>
          <Text className='label'>优惠券</Text>
          <View className='value'>
          	-￥3
          </View>
        </View>
        <View className='row'>
          <Text className='label'>会员优惠</Text>
          <Text className='value'>-8.8</Text>
        </View>
        <View className='row'>
          <Text className='label'>订单总价</Text>
          <Text className='value'>20.8</Text>
        </View>
        <View className='row'>
          <Text className='label'>实付金额</Text>
          <Text className='value'>￥20.8</Text>
        </View>
			</View>
		)
	}
}

export default FruitInfo