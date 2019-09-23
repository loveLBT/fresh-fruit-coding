import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

class IntegralItem extends Component {
	static defaultProps = {
    img: '',
    title: '',
    integral: 0,
    isExchange: false
  }
	render() {
		const { img, title, integral, isExchange } = this.props

		return(
			<View className='integral-item'>
				<Image className='img' src={img} />
        <Text className='title'>吹风筒小型便携式</Text>
        <Text className='integral'>450积分</Text>
        <View className={classnames('exchange-btn',{'isExchange': isExchange})}>
        	<Text className='txt'>兑换积分</Text>
        </View>
			</View>
		)
	}
}

export default IntegralItem