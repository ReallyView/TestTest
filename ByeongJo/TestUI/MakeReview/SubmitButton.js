//
// 작성자 : 동설아
// class : SubmitButton
// 설명 : 작성한 리뷰지를 제출하는 버튼 구현
//

import React from 'react'
import { View, StyleSheet, Alert, TouchableHighlight, Text } from 'react-native'

export default class SubmitButton extends React.Component {
  _onPressButton () {
    Alert.alert(
      '',
      '정말 제출하실건가요?',
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
          <Text style={SBstyle.nameText}> 제출하기 </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const SBstyle = StyleSheet.create({
  background: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    width: '30%',
    height: '80%'
  },
  nameText: {
    fontSize: 15
  }
})
