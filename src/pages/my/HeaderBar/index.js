import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

const messageIcon = require('@images/icon/message.png')
const vipIcon = require('@images/icon/vip.png')

class HeaderBar extends Component {
  onMessageClick = () => {
    Taro.navigateTo({
      url: '/pages/message/index'
    })
  }
	render() {
		return (
			<View className='header-bar'>
        <View className='action-wrapper'>
          <Image 
            onClick={this.onMessageClick.bind(this)} 
            className='message-icon' 
            src={messageIcon} 
          />
        </View>
				<View className='info'>
          <View className='avator'>
            <Image className='vip' src={vipIcon} />
          </View>
          <Text className='account'>13575407573</Text>
        </View>
        
			</View>
		)
	}
}

export default HeaderBar