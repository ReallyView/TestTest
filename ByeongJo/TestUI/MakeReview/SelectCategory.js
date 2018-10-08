//
// 작성자 : 동설아
// class : SelectCategory
// 설명 : 카테고리 선택 버튼
// 받아야 할 props : 카테고리 명을 받아온다 9개
//

import React from 'react' // ;
import { View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native' //  ;

export default class SelectCategory extends React.Component {
  _onPressButton () {
    Alert.alert(
      '',
      '카테고리 선택',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'ok' }
      ],
      { cancelable: false }
    )
  }
  render () {
    return (
      <View style={ACstyle.background}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
          <View style={ACstyle.selectCategoryButton}>
            <Text style={ACstyle.selectCategoryText}> 카테고리 추가 </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const ACstyle = StyleSheet.create({
  background: {
    marginLeft: 10,
    height: '20%',
    width: '30%',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: 'gray'
  },
  selectCategoryButton: {
  },
  selectCategoryText: {
  }
})//  ;
