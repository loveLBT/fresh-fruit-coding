import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import HeaderBar from '@components/HeaderBar'
import IntegralItem from './IntegralItem'
import './index.scss'

class IntegralMall extends Component {
	config = {
    navigationStyle: 'custom',
    navigationBarTextStyle: 'white'
  }
	render() {
		return (
			<View className='page integral-mall'>
				<HeaderBar
					title='VIP积分'
					backgroundColor='linear-gradient(to right, #fce855 , #ffd126)'
				/>
				<View className='header'>
					<View className='box'>
						<View className='info'>
							<Text className='label'>当前积分</Text>
							<Text className='value'>积分说明</Text>
						</View>
						<View className='integralMall'>
							<View className='count'>
								<Text className='txt'>55</Text>
								<Text className='util'>个</Text>
							</View>
						</View>
					</View>
				</View>
				<View className='content'>
					<Text className='title'>兑换排行版</Text>
					<View className='integral-mall-list'>
						<IntegralItem />
						<IntegralItem />
						<IntegralItem />
						<IntegralItem />
						<IntegralItem />
						<IntegralItem />
						<IntegralItem />
					</View>
				</View>
			</View>
		)
	}
}

export default IntegralMall