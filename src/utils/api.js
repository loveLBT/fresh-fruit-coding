import Taro from '@tarojs/taro'

import constants from '@constants/config'
import statusCode from '@constants/statusCode' 
import Toast from './toast'

const interceptorsRequest = (options) => {
	if(options.url.indexOf('http') === -1) {
		options.url = constants.baseUrl + options.url
	}

	return options
}

const interceptorsResponse = (response) => {
	return new Promise((resolve, reject) => {
		if(response.statusCode === statusCode.SUCCESS) {
			resolve(response.data)
		}else if(response.statusCode === statusCode.SUCCESS) {
			reject('请求的服务器挂了')
		}else if(response.statusCode === statusCode.NOT_FOUND) {
			reject('请求的接口不存在')
		}else if(response.statusCode === statusCode.AUTHENTICATE) {
			reject('请求的权限不足')
		}else if(response.statusCode === statusCode.FORBIDDEN) {
			reject('请求的参数错误')
		}else {
			reject('请求发生错误')
		}
	})
}

const request = (options) => {
	return new Promise((resolve, reject) => {
		const newOptions = interceptorsRequest(options)

		Taro.request({
			...newOptions,
			method: options.method || 'GET',
			success: (response) => {
				interceptorsResponse(response)
					.then((res) => {
						resolve(res)
					})
					.catch((err) => {
						Toast.info(err)
						reject(err)
					})
			},
			fail: (err) => {
				Toast.info('请求发生错误')
				console.log(err)
				reject(err)
			}
		})
	})
}

export default class Api {
	static get = (url, options) => {
		return request({
			...options,
			url,
			method: 'GET',
		})
	}
	static post = (url, options) => {
		return request({
			...options,
			url,
			method: 'POST',
		})
	}
	static put = (url, options) => {
		return request({
			...options,
			url,
			method: 'PUT',
		})
	}
	static delete = (url, options) => {
		return request({
			...options,
			url,
			method: 'DELETE',
		})
	}
	static all = (promises) => {
		return Promise.all(promises)
	}
}