import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'
import { AtButton,AtRate  } from 'taro-ui'

import RadioBar from '@components/RadioBar'
import FruitItem from '../order/FruitItem'
import './index.scss'

class Evaluate extends Component {
	render() {
		return (
			<View className='page evaluate'>
				<View className='info'>
					<View className='number'>
						<Text className='txt'>订单编号：16912348599</Text>
					</View>
					<View className='fruit-list'>
						<FruitItem />
						<FruitItem />
					</View>
				</View>
				<View className='wrapper'>
					<View className='score'>
						<View className='row'>
							<Text className='label'>整体评价</Text>
							<AtRate margin={10} max={5} value={1} />
							<Text className='state'>非常差</Text>
						</View>
						<View className='row'>
							<Text className='label'>新鲜程度</Text>
							<AtRate margin={10} max={5} value={3} />
							<Text className='state'>一般</Text>
						</View>
						<View className='row'>
							<Text className='label'>配送时间</Text>
							<AtRate margin={10} max={5} value={4} />
							<Text className='state'>好</Text>
						</View>
					</View>
					<Textarea 
						placeholderClass='textarea-placeholder'
						className='textarea'
						placeholder='鲜果果满足你的期待吗？说说它的优点和美中不足的地方吧...'
					>

					</Textarea>
					<View className='img-list'>
						<View className='img'></View>
						<View className='upload'>
							<View className='icon'></View>
							<Text className='txt'>添加图片</Text>
						</View>
					</View>
					
				</View>
				<View className='actions'>
					<RadioBar>匿名</RadioBar>
					<AtButton full={true} className='action remove'>评价</AtButton>
				</View>
			</View>
		)
	}
}

export default Evaluate