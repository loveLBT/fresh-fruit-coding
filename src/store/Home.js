import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'
import Toast from '@utils/toast'
import Api from '@utils/api'
import { delay } from '@utils/commonFunc'

class Home {
	@observable swiperList = []
	@observable categoryList = []
	@observable fruitList = []
	@action initData = async () => {
		Toast.loading()
		await Api.all([
			this.getSwiper(),
			this.getCategory(),
			this.getFruit()
		])
		Toast.hide()
	}
	@action getSwiper = async () => {
		await delay(2000)
		this.swiperList = []
	}
	@action getCategory = async () => {
		await delay(2000)
		this.categoryList = []
	} 
	@action getFruit = async () => {
		await delay(2000)
		this.fruitList = []
	}
}

export default Home