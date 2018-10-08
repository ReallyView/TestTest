//
// 작성자 : 동설아
// class : GradeStar
// 설명 : 평점매기기 1개 단위로 0~5개 까지 가능하다 자동완성기능 추가
// 받아야 할 props :
//

import React from 'react'
import { View, Platform, StyleSheet, TouchableHighlight, TextInput, Image } from 'react-native'

var imgArr = [
  { image: require('../../Images/GradeStars/1-star.png') },
  { image: require('../../Images/GradeStars/2-star.png') },
  { image: require('../../Images/GradeStars/3-star.png') },
  { image: require('../../Images/GradeStars/4-star.png') },
  { image: require('../../Images/GradeStars/5-star.png') }
]

export default class GradeOneBox extends React.Component {
  componentWillMount () {
    this.setState({
      count: 0
    })
  }

  onPress () {
    this.setState({
      count: ((this.state.count === 4) ? 0 : this.state.count + 1)
    })
  }
  render () {
    return (
      <View style={GOBstyle.row}>
        <TextInput style={GOBstyle.name} placeholder=' 항목입력 ' onChangeText={(text) => this.setState({ text })} />

        <TouchableHighlight onPress={this.onPress.bind(this)}>
          <Image style={GOBstyle.starimage}
            source={imgArr[this.state.count].image}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const GOBstyle = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  name: {
    margin: 5,
    width: 80,
    fontSize: 15
  },
  starimage: {
    height: 20,
    width: 130
  },
  container:
  {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
  viewHolder:
  {
    height: 55,
    backgroundColor: '#26A69A',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },

  text:
  {
    color: 'white',
    fontSize: 25
  }
})
