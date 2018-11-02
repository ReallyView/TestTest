import React from 'react'
import { View } from 'react-native'
import BottomButton from './BottomButton'

const bottomLayout = {
  flexDirection: 'row',
  borderWidth: 1
}

export default class Bottom extends React.Component {
  render () {
    return (
      <View style={bottomLayout}>
        <BottomButton
          id={0}
          iconName={'md-home'}
          name={'home'} />
        <BottomButton
          id={1}
          iconName={'md-menu'}
          name={'카테고리'} />
        <BottomButton
          id={2}
          iconName={'ios-paper-plane'}
          name={'투표 요청/비교'}
          onPress={this.props.GoRequest} />
        <BottomButton
          id={3}
          iconName={'ios-more'}
          name={'더보기'} />
      </View>
    )
  }
}
