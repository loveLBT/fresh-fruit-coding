import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

const MIN_VALUE = 1
const MAX_VALUE = 99999

export default class ASInput extends Component {
  static defaultProps = {
      value:MIN_VALUE,
  }
  constructor(props) {
      super(props)
  
      this.state = {
        value:props.value
      }
  }
  onAdd = () => {
    const { value } = this.state
    if(value < MAX_VALUE){
      this.onChangeValue(value+1)
    }else {
      Taro.showToast({
        title: '真的不能再多了~',
        icon: 'none'
      })
    }
  }
  onSubtrac = () => {
    const { value } = this.state
    if(value > MIN_VALUE){
      this.onChangeValue(value-1)
    }else {
      Taro.showToast({
        title: '真的不能再少了~',
        icon: 'none'
      })
    }
  }
  onInputChange = (e) => {
    if(e.target.value) {
      this.onChangeValue(parseInt(e.target.value))
    }else {
      this.setState({value: ''})
    }
  }
  onChange = (e) => {
    if(!e.target.value) {
      Taro.showToast({
        title: '商品数量必须大于0',
        icon: 'none'
      })
      this.onChangeValue(MIN_VALUE)
    }
  }
  onChangeValue = (value) => {
    this.setState({
      value: value
    })
    if(this.props.onChange){
      this.props.onChange(value)
    }
  }
  render() {
    const { value } = this.state
    
    return (
      <View className="as-input">
        <Text onClick={this.onSubtrac.bind(this)} className={classnames("as",{"as-disabled":value === MIN_VALUE})}>一</Text>
        <Input 
          maxLength={5}
          minLength={1}
          type="number" 
          value={value.toString()}
          className="input" 
          onInput={this.onInputChange.bind(this)}
          onChange={this.onChange.bind(this)}
        />
        <Text onClick={this.onAdd.bind(this)} className={classnames("as",{"as-disabled":value === MAX_VALUE})}>十</Text>
      </View>  
    )
  }
}