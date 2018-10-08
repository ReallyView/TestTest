//
// 작성자 : 동설아
// class : SubmitReviewMain
// 설명 : 제일 background가 되는 곳
// 플러스 설명
// *실행할 공간에서 flex를 1로 지정해 주어야 한다
// : TitleText는 제목(제품명)이 적혀지는 곳 0.15
// : AddImage는 갤러리에 접근해서 이미지를 가져와 저장하는곳 0.35
// : SelectCategory는 9개의 카테고리중 1개를 선택하는 곳
// : ReviewText는 리뷰를 한글로 적는 곳 0.2
// : GradeStar는 별로 평점을 매기는 곳 0.2

import React from 'react'
import { View, StyleSheet } from 'react-native'
import TitleText from './MakeReview/TitleText.js'
import SecondLayout from './MakeReview/SecondLayout.js'
import ReviewText from './MakeReview/ReviewText.js'
import ConnectButton from './MakeReview/ConnectButton.js'

export default class SubmitReviewMain extends React.Component {
  render () {
    return (
      <View style={styles.background}>
        <TitleText />
        <SecondLayout />
        <ReviewText />
        <ConnectButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})
