//
// 작성자 : 김성식
// class : GradeGroup
// 설명 : ReviewCard class 에 들어갈 component
// 받아야 할 props :
// grades : [
//   {gradeName(String), stars(Number)}(Object),
//   {gradeName(String), stars(Number)}(Object)...
// ]
//

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class GradeGroup extends React.Component {
  componentWillMount () {

  }

  render () {
    const oneStar = require('../Images/GradeStars/1-star.png')
    const twoStar = require('../Images/GradeStars/2-star.png')
    const threeStar = require('../Images/GradeStars/3-star.png')
    const fourStar = require('../Images/GradeStars/4-star.png')
    const fiveStar = require('../Images/GradeStars/5-star.png')
    const starImages = [
      oneStar,
      twoStar,
      threeStar,
      fourStar,
      fiveStar
    ]
    return (
      <View style={styles.container}>
        {
          this.props.grades.map((grade, index) => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <Text>
                  {grade.gradeName}
                </Text>
                <Image style={styles.starImage}
                  source={starImages[grade.stars - 1]} />
              </View>
            )
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    marginLeft: 20,
    justifyContent: 'space-around'
  },
  gradeContainer: {
    flexDirection: 'row'
  },
  starImage: {
    width: 110,
    height: 20,
    marginLeft: 10
  }
})
