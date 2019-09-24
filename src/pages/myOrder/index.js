import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import OrderItem from './OrderItem'
import './index.scss'

const tabList = [
  {title: '全部'},
  {title: '待付款'},
  {title: '待配送'}, 
  {title: '待评价'},
  {title: '退款'}
]

class MyOrder extends Component {
	config = {
    navigationBarTitleText: '我的订单'
  }
	constructor(props) {
    super(props)
  
    this.state = {
      current: 0
    }
  }
  onClick = (value) => {
    this.setState({
      current: value
    })
  }
	render() {
		const { current } = this.state

		return (
			<View className='page my-order'>
				<AtTabBar
          tabList={tabList}
          onClick={this.onClick.bind(this)}
          current={current}
        />
        <View className='order-list'>
        	<OrderItem />
        </View>
			</View>
		)
	}
}

export default MyOrder