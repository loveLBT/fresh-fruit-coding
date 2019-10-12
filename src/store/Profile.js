import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'

import wx from '@utils/wx'
import Api from '@utils/api'
import Toast from '@utils/toast'
import constants from '@constants/config'

export default class Profile {
	@observable systemInfo = {}
	@observable locationInfo = {}

	STORAGE_KEY_SYSTEM_INFO = 'STORAGE_KEY_SYSTEM_INFO'

	constructor() {
		this.getSystemInfo()
		this.getLocation()
	}
	/**
	 * 从缓存或者api接口中获取系统信息
	 * @return {[type]} [description]
	 */
	@action getSystemInfo = () => {
		let systemInfo = Taro.getStorageSync(this.STORAGE_KEY_SYSTEM_INFO)
		if(!systemInfo) {
			Taro.getSystemInfo({
				success: (res) => {
					systemInfo = res
					Taro.setStorageSync(this.STORAGE_KEY_SYSTEM_INFO, res)
				}
			})
		}
		this.systemInfo = systemInfo
	}
	
	@action getLocation = async () => {
		const res = await wx.getLocation({
			type: 'gcj02',
			altitude: true
		})

		const options = {
			data: {
				key: constants.tencentLbsKey,
				location: res.latitude + ',' + res.longitude,
				get_poi: 0
			}
		}
		const res2 = await Api.get('https://apis.map.qq.com/ws/geocoder/v1/', options)
		if(res2.status === 0) {
			this.locationInfo = res2.result.address_component
		}
	}
}