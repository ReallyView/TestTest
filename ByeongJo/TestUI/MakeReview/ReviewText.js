//
// 작성자 : 동설아
// class : ReivewText
// 설명 : 글쓰기 리뷰 스크롤 가능하게 구현
// 받아야 할 props :
//
// multiline={true} //  옆으로 글이 써지는 것이 아니라 밑으로 내려가게 만듦
// editable={true} // 안에 글씨를 써 넣을 수 있게 만듦

import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default class ReviewText extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <View style={RTstyle.background}>
        <UselessTextInput
          multiline={true}
          numberOfLines={6}
          placeholder=' 리뷰를 입력하시오 '
          onChangeText={(text) => this.setState({ text })}
        />
      </View>
    )
  }
}

class UselessTextInput extends React.Component {
  render () {
    return (
      <TextInput
        style={UTstyle.getString}
        {...this.props}
        editable={true}
        maxLength={100000}
      />
    )
  }
}

const RTstyle = StyleSheet.create({
  background: {
    flex: 0.2,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#999'
  }
})

const UTstyle = StyleSheet.create({
  getString: {
    fontSize: 20
  }
})
