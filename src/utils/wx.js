import Taro from '@tarojs/taro'

const getLocation = (params) => {
	return new Promise((resolve, reject) => {
		Taro.getLocation({
			...params,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

const analyLocation = (locationStr) => {
	
}

export default {
	getLocation
}