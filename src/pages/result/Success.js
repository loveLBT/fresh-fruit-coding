import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class Success extends Component {
	config = {
    navigationBarTitleText: '支付详情'
  }
	render() {
		return (
			<View className='page success'>
				<View className='state'>
					<View className='icon'></View>
					<Text className='txt'>支付成功</Text>
				</View>
				<View className='info'>
					<View className='row'>
						<Text className='label'>交易方式</Text>
						<Text className='value'>微信支付</Text>
					</View>
					<View className='row'>
						<Text className='label'>下单时间</Text>
						<Text className='value'>2019-8-27 16:23:20</Text>
					</View>
					<View className='row'>
						<Text className='label'>交易单号</Text>
						<Text className='value'>201990945732920</Text>
					</View>
				</View>
			</View>
		)
	}
}

export default Success