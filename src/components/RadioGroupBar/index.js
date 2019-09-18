import Taro, { Component } from '@tarojs/taro'
import { View, Text, Radio, RadioGroup, Label } from '@tarojs/components'
import classnames from 'classnames'

import './index.scss'

class RadioGroupBar extends Component {
  static defaultProps = {
    title: '',
    options: [],
    border: true
  }
  render() {
    const { title, border, options } = this.props

    return (
      <View className={classnames('radio-group-bar', {'border': border})}>
        <Text className='label'>{title}</Text>
        <View className='group'>
          <RadioGroup>
            <Label for={1}>
              <Radio className='radio' value={1}>先生</Radio>
            </Label>
            <Label for={2}>
              <Radio className='radio' value={2}>女士</Radio>
            </Label>
          </RadioGroup>
        </View>
      </View>
    )
  }
}

export default RadioGroupBar