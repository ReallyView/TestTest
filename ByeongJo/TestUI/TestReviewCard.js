import React from 'react'
import { StyleSheet, View } from 'react-native'
import ReviewCard from './ReviewCard'

const reviewData = {
  personImageUrl: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
  author: 'Kim Sungsik',
  imageUrl: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
  grades: [
    { gradeName: 'color', stars: 3 },
    { gradeName: 'price', stars: 5 },
    { gradeName: 'quality', stars: 4 }
  ],
  text: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세\n' +
  '무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세\n' +
  '남산 위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세\n' +
  '무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세\n' +
  '가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세\n' +
  '무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세\n' +
  '이 기상과 이 마음으로 충성을 다하여 괴로우나 즐거우나 나라사랑하세\n' +
  '무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세',
  isExtended: false,
  likeCount: 39,
  dislikeCount: 14
}

export default class TestReviewCard extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ReviewCard reviewData={reviewData} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})
