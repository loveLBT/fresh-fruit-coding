import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AddressItem from '../addressManage/AddressItem'
import FruieItem from '../order/FruitItem'
import InfoBar from '../order/InfoBar'
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
					<FruieItem />
					<FruieItem />
				</View>

				<View className='info-2'>
					<InfoBar />
				</View>
				<View className='info-3'>
					
				</View>
			</View>
		)
	}
}

export default OrderDetail