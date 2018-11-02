//
// 작성자 : 김수진
// class : Contents - ReviewCard 를 받을 공간.
//         각 ReviewCard 에 정보를 전달해준다.
// 제공해야 할 props :
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
import { ScrollView, StyleSheet, View } from 'react-native'
import ReviewCard from './ReviewCard'

export default class Contents extends React.Component {
  render () {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
          {
            this.props.reviewDataArray.data.item.reviews.map((review, index) => {
              return (
                <View style={styles.ContentLayout} key={index}>
                  <ReviewCard onLikeIncrease={this.props.onClickLikeButton(review.id, index)}
                    onDislikeIncrease={this.props.onClickDislikeButton(review.id, index)}
                    likeNum={this.props.likeNumArray[index]}
                    dislikeNum={this.props.dislikeNumArray[index]}
                    reviewData={review}
                    isExtended={false} />
                </View>
              )
            })
          }
          <View style={{ marginBottom: 70 }} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ContentLayout: {
    borderWidth: 1,
    borderColor: 'gray'
  },
  BlankLayout: {
    height: 10,
    backgroundColor: '#DCDCDC'
  },
  ScrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  }
})
