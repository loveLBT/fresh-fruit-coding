import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { toJS } from 'mobx'
import { observer, inject } from '@tarojs/mobx'

import HeaderBar from './HeaderBar'
/*import TagsBar from './TagsBar'*/
import './index.scss'

@inject('profileStore')
@observer
class Search extends Component {
  config = {
    navigationStyle: 'custom'
  }
  render() {
    const { profileStore } = this.props
    
    return (
      <View className='page search'>
        <HeaderBar 
          systemInfo={profileStore.systemInfo}
        />
        {/*<TagsBar 
          title='历史搜素'
        />
        <TagsBar 
          title='热门搜素'
        />*/}
      </View>
    )
  }
}

export default Search