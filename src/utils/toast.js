import Taro from '@tarojs/taro'



export default class Toast {
	static info = (title, duration = 1500) => {
		Taro.showToast({
			title: title,
			icon: 'none',
			mask: true,
			duration
		})
		.then(() => {
			setTimeout(() => {
				Toast.hideLoading()
			}, duration)
		})
	}
	static loading = (title = '加载中') => {
		Taro.showLoading({
			title: title,
			icon: 'loading',
			mask: true
		})
		Taro.showNavigationBarLoading()
	}
	static success = (title) => {
		Taro.showToast({
			title: title,
			icon: 'success',
			mask: true
		})
	}
	static hide = (duration = 800) => {
		setTimeout(() => {
			Taro.hideLoading()
			Taro.hideNavigationBarLoading()
		}, duration)
	}
}