import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import './index.scss'

const banner = require('@images/banner.png')

class SwiperBar extends Component {
	render() {
		return (
			<View className='swiper-bar'>
				<Swiper
	        indicatorColor='#999'
	        indicatorActiveColor='#00e072'
	        circular
	        indicatorDots
	        autoplay
	      >
	        <SwiperItem key={1}>
	        	<Image className='img' src={banner} />
	      	</SwiperItem>
	      </Swiper>
			</View>
		)
	}
}

export default SwiperBar