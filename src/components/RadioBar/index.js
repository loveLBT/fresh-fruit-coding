import Taro, { Component } from '@tarojs/taro'
import { Radio } from '@tarojs/components'

import './index.scss'

class RadioBar extends Component {
	render() {
		return (
			<Radio color='#00e072' className='radio-bar'>
				{this.props.children}
			</Radio>
		)
	}
}

export default RadioBar