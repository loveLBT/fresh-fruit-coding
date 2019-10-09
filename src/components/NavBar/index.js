import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import store from '@store'
import './index.scss'

const { profileStore } = store

class NavBar extends Component {
	static defaultProps = {
	 	color: 'black',
	 	backgroundColor: '#fff',
	 	statusBarHeight:  profileStore.systemInfo.statusBarHeight || 20  
	}

	render() {
		const { statusBarHeight, backgroundColor, color } = this.props

		const barStyle = {
			paddingTop: `${statusBarHeight}PX`,
			background: backgroundColor,
			color
		}
		return (
			<View className='nav-bar'>
				<View className='bar' style={barStyle}>
					{this.props.children}
				</View>
				<View className='placeholder' style={barStyle}></View>
			</View>
		)
	}
}

export default NavBar