//
// 작성자 : 김성식
// class : ReviewCard
// 설명 : ItemReviewsView class 에 들어갈 component
// import 하는 component : PersonImage, ImageGroup, GradeGroup, ReviewText
// 받아야 할 props :
// reviewData : {
//  personImageUrl(String),
//  author(String),
//  imageUrl(String),
//  grades : [
//    {gradeName(String), stars(Number)}(Object),
//    {gradeName(String), stars(Number)}(Object)...
//  ],
//  text(String),
//  isExtended(Boolean),
//  likeCount(Number),
//  dislikeCount(Number)
//

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import PersonImage from './PersonImage'
import ImageGroup from './ImageGroup'
import GradeGroup from './GradeGroup'
import ReviewText from './ReviewText'

export default class ReviewCard extends React.Component {
  componentWillMount () {
    this.setState({
      likeCount: this.props.reviewData.likeCount,
      dislikeCount: this.props.reviewData.dislikeCount
    })
  }
  like () {
    this.setState({
      likeCount: this.state.likeCount + 1
    })
  }
  dislike () {
    this.setState({
      dislikeCount: this.state.dislikeCount + 1
    })
  }
  render () {
    return (
      <View>
        <View style={styles.profileContainer}>
          <PersonImage personImageUrl={this.props.reviewData.personImageUrl} />
          <Text style={styles.authorName}>
            {this.props.reviewData.author}
          </Text>
        </View>
        <View style={{ padding: 10 }} />
        <View style={{ flexDirection: 'row' }}>
          <ImageGroup imageUrl={this.props.reviewData.imageUrl} />
          <GradeGroup grades={this.props.reviewData.grades} />
        </View>
        <View style={{ padding: 10 }} />
        <ReviewText text={this.props.reviewData.text} isExtended={this.props.reviewData.isExtended} />
        <View style={styles.buttonContainer}>
          <Button title={'👍 좋아요 ' + this.state.likeCount} onPress={this.like.bind(this)} />
          <Button title={'👎 싫어요 ' + this.state.dislikeCount} onPress={this.dislike.bind(this)} />
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
