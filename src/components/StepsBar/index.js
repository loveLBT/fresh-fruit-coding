import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class StepsBar extends Component {
	render() {
		return (
			<View className='steps-bar'>
				<View className='step'>
					<View className='wrap'>
						<View className='line left'></View>
						<View className='circular'></View>
						<View className='line right'></View>
					</View>
					<View className='title'>aa</View>
					<View className='desc'></View>
				</View>
				<View className='step'>
					<View className='wrap'>
						<View className='line left'></View>
						<View className='circular'></View>
						<View className='line right'></View>
					</View>
					<View className='title'>bb</View>
					<View className='desc'></View>
				</View>
				<View className='step'>
					<View className='wrap'>
						<View className='line left'></View>
						<View className='circular'></View>
						<View className='line right'></View>
					</View>
					<View className='title'>cc</View>
					<View className='desc'></View>
				</View>
			</View>
		)
	}
}

export default StepsBar