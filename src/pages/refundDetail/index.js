import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import FruitItem from '../order/FruitItem'
import './index.scss'

class RefundDetail extends Component {
	config = {
    navigationBarTitleText: '填写订单'
  }
	render() {
		return (
			<View className='page refundDetail'>
				<View className='number'>
					<Text className='txt'>订单编号：16048598403</Text>
					<View className='status'>退款成功</View>
				</View>
				<View className='fruit-info'>
					<View className='title'>
						<Text className='txt'>退款信息</Text>
					</View>
					<View className='fruit-list'>
						<FruitItem />
						<FruitItem />
					</View>
				</View>
				<View className='refund-info'>
					<View className='row'>
						<Text className='txt'>
							退款原因：2019-08-27
						</Text>
					</View>
					<View className='row'>
						<Text className='txt'>
							退款金额：￥20.8
						</Text>
					</View>
					<View className='row'>
						<Text className='txt'>
							申请时间：2019-08-27 16：22：59
						</Text>
					</View>
					<View className='row'>
						<Text className='txt'>
							退款编号：168389589200
						</Text>
					</View>
				</View>
			</View>
		)
	}
}

export default RefundDetail