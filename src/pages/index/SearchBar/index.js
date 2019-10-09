import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const searchIcon = require('@images/icon/search.png')
const msgIcon = require('@images/icon/message.png')

class SearchBar extends Component {
	render() {
		return (
			<View className='search-bar'>
				<View className='bar'>
					<View className='address'>
						<Text className='txt'>苍南</Text>
					</View>
					<View className='search'>
						 <Image className='icon' src={searchIcon} />
						 <Text className='txt'>搜索商品</Text>
					</View>
					<Image className='msgIcon' src={msgIcon} />
				</View>
				<View className='placeholder'></View>
			</View>
		)
	}
}

export default SearchBar