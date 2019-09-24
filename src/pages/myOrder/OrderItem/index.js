import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Tag from '@components/Tag'
import FruitItem from '../../order/FruitItem'
import './index.scss'

class OrderItem extends Component {
	render() {
		return (
			<View className='order-item'>
				<View className='number'>
					<Text className='txt'>订单编号：16048598403</Text>
					<View className='status'>交易成功</View>
				</View>
				<View className='fruit-list'>
					<FruitItem />
					<FruitItem />
				</View>
				<View className='order-info'>
					<Text className='time'>2019-08-27 16:23:20</Text>
					<View className='count'>
						<Text className='label'>共2件商品</Text>
						<Text className='label'>合计：</Text>
						<Text className='value'>￥58.8</Text>
					</View>
				</View>
				<View className='actions'>
					<View className='tag'>
						<Tag name='联系卖家' />
					</View>
					<View className='tag'>
						<Tag name='取消订单' />
					</View>
					<View className='tag'>
						<Tag name='付款' type='primary' />
					</View>
				</View>
			</View>
		)
	}
}

export default OrderItem