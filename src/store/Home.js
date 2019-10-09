import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'

class Home {
	@observable swiperList = []
	@observable categoryList = []
	@observable fruitList = []
}

export default Home