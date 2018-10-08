//
// 작성자 : 동설아
// class : PlusReviewStar
// 설명 : 별평점매기기 추가하는 버튼 구현
//

import React from 'react'
import { View, StyleSheet, Alert, TouchableHighlight, Text, Animated } from 'react-native'

export default class PlusReviewStar extends React.Component {
  _onPressButton () {
    Alert.alert(
      '',
      '개수를 늘리실건가요?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'ok' }
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <View style={SBstyle.background}>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor='white'>
          <Text style={SBstyle.nameText}> ☆평점 추가하기 </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const SBstyle = StyleSheet.create({
  background: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    width: '30%',
    height: '80%'
  },
  nameText: {
    fontSize: 15
  }
})
