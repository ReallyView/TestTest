//
// 작성자 : 김성식
// class : ReviewCard
// 설명 : ItemReviewsView class 에 들어갈 component
// import 하는 component : PersonImage, ImageGroup, GradeGroup, ReviewText
// 받아야 할 props :
// reviewData : {
//  profileImgUrl(String),
//  author : {
//    name(String),
//    profileImgUrl(String, could be null)
//  imgUrls : [
//    (String),
//  ] (could be null)
//  grades : [
//    {name(String), starNum(Number)}(Object),
//    {name(String), Num(Number)}(Object)...
//  ],
//  text(String),
// }
// likeNum(Number),
// dislikeNum(Number)
// isExtended(Boolean)
//

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import PersonImage from './PersonImage'
import ImageGroup from './ImageGroup'
import GradeGroup from './GradeGroup'
import ReviewText from './ReviewText'

export default class ReviewCard extends React.Component {
  render () {
    return (
      <View>
        <View style={styles.profileContainer}>
          <PersonImage profileImgUrl={
            (this.props.reviewData.author.profileImgUrl)
              ? this.props.reviewData.author.profileImgUrl
              : 'https://facebook.github.io/react-native/docs/assets/favicon.png'} />
          <Text style={styles.authorName}>
            {this.props.reviewData.author.name}
          </Text>
        </View>
        <View style={{ padding: 5 }} />
        <View style={{ flexDirection: 'row' }}>
          <ImageGroup imageUrl={
            (this.props.reviewData.imgUrls[0])
              ? this.props.reviewData.imgUrls[0]
              : 'https://facebook.github.io/react-native/docs/assets/favicon.png'} />
          <GradeGroup grades={this.props.reviewData.grades} />
        </View>
        <View style={{ padding: 5 }} />
        <ReviewText text={this.props.reviewData.text} isExtended={this.props.isExtended} />
        <View style={styles.buttonContainer}>
          <Button title={'👍 좋아요 ' + this.props.likeNum} onPress={this.props.onLikeIncrease} />
          <Button title={'👎 싫어요 ' + this.props.dislikeNum} onPress={this.props.onDislikeIncrease} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  authorName: {
    fontSize: 20,
    marginLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
