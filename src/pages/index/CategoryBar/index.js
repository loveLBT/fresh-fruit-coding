import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './index.scss'

const category1 = require('@images/category-1.png')
const category2 = require('@images/category-2.png')
const category3 = require('@images/category-3.png')
const category4 = require('@images/category-4.png')

class CategoryBar extends Component {
	render() {
		return (
			<View className='category-bar'>
				<View className='item'>
          <View className='left'>
            <Text className='title category-1'>满39减8</Text>
            <Text className='desc'>密瓜3.9元</Text>
          </View>
          <View className='right'>
            <Image className='img' src={category1} />
          </View>
        </View>
        <View className='item'>
          <View className='left'>
            <Text className='title category-2'>满59减12</Text>
            <Text className='desc'>山竹1.9元</Text>
          </View>
          <View className='right'>
            <Image className='img' src={category2} />
          </View>
        </View>
        <View className='item'>
          <View className='left'>
            <Text className='title category-3'>满39减10</Text>
            <Text className='desc'>无籽葡萄5.9元</Text>
          </View>
          <View className='right'>
            <Image className='img' src={category3} />
          </View>
        </View>
        <View className='item'>
          <View className='left'>
            <Text className='title category-4'>满59减10</Text>
            <Text className='desc'>巨峰葡萄1.9元</Text>
          </View>
          <View className='right'>
            <Image className='img' src={category4} />
          </View>
        </View>
			</View>
		)
	}
}

export default CategoryBar