import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss';

class OrderInfo extends Component {
	render() {
		return (
			<View className='order-info'>
				<View className='row'>
					<Text className='txt'>
						下单时间：2019-08-27
					</Text>
				</View>
				<View className='row'>
					<Text className='txt'>
						支付方式：微信支付
					</Text>
				</View>
			</View>
		)
	}
}

export default OrderInfo