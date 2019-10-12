import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import '@tarojs/async-await'

import store from './store'
import './styles/base.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/basket/index',
      'pages/my/index',
      'pages/addAddress/index',
      'pages/accountManage/index',
      'pages/search/index',
      'pages/message/index', 
      'pages/coupon/index',
      'pages/addressManage/index',
      'pages/result/Success',
      'pages/integralMall/index',
      'pages/refundDetail/index',
      'pages/evaluate/index',
      'pages/myOrder/index',
      'pages/orderDetail/index',
      'pages/order/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '鲜果果商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './images/icon/tab_index.png',
        selectedIconPath: './images/icon/tab_index_active.png'
      },{
        pagePath: 'pages/basket/index',
        text: '果篮',
        iconPath: './images/icon/tab_basket.png',
        selectedIconPath: './images/icon/tab_basket_active.png'
      },{
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './images/icon/tab_account.png',
        selectedIconPath: './images/icon/tab_account_active.png'
      }]
    },
    permission: {
      'scope.userLocation': {
        desc: '你的位置信息将用于展示你周边的产品'
      }
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store} />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
