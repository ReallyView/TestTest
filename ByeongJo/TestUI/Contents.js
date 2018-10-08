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

class Contents extends React.Component {
  render () {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  ContentLayout: {
    height: 150,
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

export default Contents
