import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'

export default class Profile {
	@observable systemInfo = {}

	STORAGE_KEY_SYSTEM_INFO = 'STORAGE_KEY_SYSTEM_INFO'

	constructor() {
		this.getSystemInfo()
	}
	/**
	 * 从缓存或者api接口中获取系统信息
	 * @return {[type]} [description]
	 */
	@action getSystemInfo = () => {
		const systemInfo = Taro.getStorageSync(this.STORAGE_KEY_SYSTEM_INFO)
		console.log(systemInfo)
		if(systemInfo) {
			this.systemInfo = systemInfo
		}else {
			Taro.getSystemInfo({
				success: (res) => {
					this.systemInfo = res
					Taro.setStorageSync(this.STORAGE_KEY_SYSTEM_INFO, res)
				}
			})
		}
	}
}