import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'

import NavBar from '../NavBar'
import './index.scss'

class HeaderBar extends Component {
	static defaultProps = {
	 	title: '',
	 	backgroundColor: '',
	 	iconColor: '#fff',
	 	titleColor: '#fff'  
	}
	state = {
		canBack: false
	}
	componentDidMount () {
		this.checkCanBack()
	}
	checkCanBack = () => {
		const canBack = Taro.getCurrentPages().length > 1
		this.setState({ canBack })
	}
	handleGoBack = () => Taro.navigateBack()
	render() {
		const { title, backgroundColor, iconColor, titleColor } = this.props
		const { canBack } = this.state

	  return (
	  	<NavBar
	  		backgroundColor={backgroundColor}
	  	>
	  		<View className='header-bar'>
	  			<AtIcon color={iconColor} value='chevron-left'></AtIcon>
	  			<View className='title'>
	  				<Text style={{color: titleColor}} className='txt'>{title}</Text>
	  			</View>
	   		</View>
	  	</NavBar>
	    
	  );
	}
}

export default HeaderBar