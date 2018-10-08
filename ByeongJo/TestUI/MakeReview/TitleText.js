//
// 작성자 : 동설아
// class : TitleText
// 설명 : 제목 및 제품명 설정 자동완성기능 구현
// 받아야 할 props : 제목 및 제품명 자동완성?
//

import React from 'react' // ;
import { View, StyleSheet, TextInput } from 'react-native'

export default class TitleText extends React.Component {
  render () {
    return (
      <View style={TTstyle.background}>
        <View>
          <TextInput style={TTstyle.getString} placeholder=' 제목을 입력하시오 ' onChangeText={(text) => this.setState({ text })} />
        </View>
      </View>
    )
  }
}

const TTstyle = StyleSheet.create({
  background: {
    flexDirection: 'row',
    flex: 0.15
  },
  getString: {
    width: 230,
    fontSize: 30
  }
})
