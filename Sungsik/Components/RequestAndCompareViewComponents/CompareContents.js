import React from 'react'
import gql from 'graphql-tag'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'
import { graphql } from 'react-apollo'

const oneStar = require('../../Images/GradeStars/1-star.png')
const twoStar = require('../../Images/GradeStars/2-star.png')
const threeStar = require('../../Images/GradeStars/3-star.png')
const fourStar = require('../../Images/GradeStars/4-star.png')
const fiveStar = require('../../Images/GradeStars/5-star.png')
const starImages = [
  oneStar,
  twoStar,
  threeStar,
  fourStar,
  fiveStar
]

const deviceWidth = Dimensions.get('window').width * 0.8

const gradeContainer = {
  flexDirection: 'row',
  justifyContent: 'space-around'
}

const starImage = {
  width: deviceWidth / 2,
  height: deviceWidth / 12
}

function showContents ({ data: { loading, items } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      items
        ? <ScrollView>
          {
            items.map((grade, index) => {
              return (
                <View style={gradeContainer} key={index}>
                  <Image style={starImage}
                    source={starImages[grade.starNumAverage1 - 1]} />
                  <Text>{grade.name}</Text>
                  <Image style={starImage}
                    source={starImages[grade.starNumAverage2 - 1]} />
                </View>
              )
            })
          }
        </ScrollView>
        : <View />
    )
  }
}

export default graphql(gql`
  query compareItems($item1Id: ID!, $item2Id: ID!) {
    items: compareItems(id1: $item1Id, id2: $item2Id) {
      name
      starNumAverage1
      starNumAverage2
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        item1Id: props.item1Id,
        item2Id: props.item2Id
      }
    })
  }
})(showContents)
