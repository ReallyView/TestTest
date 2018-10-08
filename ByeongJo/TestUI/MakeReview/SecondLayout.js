//
// 작성자 : 동설아
// class : secondLayout
// 설명 : 제목 밑에 이미지 추가하기랑 카테고리 추가 버튼 구현 묶은 것
//
import React from 'react'
import { View, StyleSheet } from 'react-native'
import AddImage from './AddImage.js'
import SelectCategory from './SelectCategory.js'

export default class SubmitReviewMain extends React.Component {
  render () {
    return (
      <View style={styles.secondLayout}>
        <AddImage />
        <SelectCategory />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  secondLayout: {
    flex: 0.35,
    flexDirection: 'row'
  }
})
