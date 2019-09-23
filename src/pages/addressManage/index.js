import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import AddressItem from './AddressItem'
import './index.scss'

class AddressManage extends Component {
	config = {
    navigationBarTitleText: '我的收货地址'
  }
	render() {
		return (
			<View className='page address-manage'>
				<AddressItem isDefault={true} />
				<AddressItem />
				<AddressItem />
				<AddressItem />
				<AtButton className='b-btn' type='primary' full={true}>新增收获地址</AtButton>
			</View>
		)
	}
}

export default AddressManage