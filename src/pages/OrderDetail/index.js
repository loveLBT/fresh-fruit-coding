import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import AddressItem from '../addressManage/AddressItem'
import FruieItem from '../order/FruitItem'
import FruitInfo from './FruitInfo'
import OrderInfo	from './OrderInfo'
import './index.scss'

class OrderDetail extends Component {
	config = {
    navigationBarTitleText: '订单详情'
  }
	render() {
		return (
			<View className='page order-detail'>
				<View className='number'>
					<Text className='txt'>订单编号：1680238977714</Text>
					<Text className='status'>交易成功</Text>
				</View>
				<View className='info-1'>
					<AddressItem 
						isDefault={true}
					/>
					<View className='fruit-list'>
						<FruieItem />
						<FruieItem />
					</View>
					<View className='fruit-count'>
						<Text className='txt'>共2件商品</Text>
					</View>
				</View>

				<View className='info-2'>
					<FruitInfo />
				</View>
				<View className='info-3'>
					<OrderInfo />
				</View>
				<View className='actions'>
					<AtButton full={true} className='action remove'>删除</AtButton>
				</View>
			</View>
		)
	}
}

export default OrderDetail