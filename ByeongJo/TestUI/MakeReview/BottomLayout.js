//
// 작성자 : 동설아
// class : BottomLayout
// 설명 : 제목 밑에 이미지 추가하기랑 카테고리 추가 버튼 구현 묶은 것
//
import React from 'react'
import { View, StyleSheet } from 'react-native'
import SubmitButton from './SubmitButton.js'
import PlusReviewStar from './PlusReviewStar.js'

export default class BottomLayout extends React.Component {
  render () {
    return (
      <View style={styles.bottomLayout}>
        <SubmitButton />
        <PlusReviewStar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomLayout: {
    flex: 0.1,
    flexDirection: 'row'
  }
})
