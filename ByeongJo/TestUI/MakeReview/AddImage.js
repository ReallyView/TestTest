//
// 작성자 : 동설아
// class : AddImage
// 설명 : 이미지 추가 5개 이하
// 받아야 할 props : props는 아니고.. 앨범 접근할 수있는 것?
//

import React from 'react' // ;
import { View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native' //  ;

export default class AddImage extends React.Component {
  _onPressButton () {
    Alert.alert(
      '',
      '사진 추가',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'ok' }
      ],
      { cancelable: false }
    )
  }
  render () {
    return (
      <View style={AIstyle.background}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
          <View style={AIstyle.addImageButton}>
            <Text style={AIstyle.addImageText}> 사진 최대 5장 추가 </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
const AIstyle = StyleSheet.create({
  background: {
    marginLeft: 10,
    height: '50%',
    width: '50%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'gray'
  },
  addImageButton: {
  },
  addImageText: {
    alignItems: 'center',
    fontSize: 20
  }
})
