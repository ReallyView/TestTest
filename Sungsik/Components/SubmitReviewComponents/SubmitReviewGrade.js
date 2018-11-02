import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'

let imgArr = [
  { image: require('../../Images/GradeStars/1-star.png') },
  { image: require('../../Images/GradeStars/2-star.png') },
  { image: require('../../Images/GradeStars/3-star.png') },
  { image: require('../../Images/GradeStars/4-star.png') },
  { image: require('../../Images/GradeStars/5-star.png') }
]

export default class SubmitReviewGrade extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      starNum: this.props.starNum
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeStarNum = this.onChangeStarNum.bind(this)
  }
  onChangeName (text) {
    this.props.onChangeName(text, this.props.index)
  }
  onChangeStarNum () {
    this.props.onChangeStarNum(this.props.starNum, this.props.index)
    this.setState({
      starNum: this.props.getStarNum(this.props.index)
    })
  }
  render () {
    return (
      <View style={styles.row}>
        <TextInput style={styles.name} placeholder=' 항목입력 '
          onChangeText={(text) => this.onChangeName(text)}
        />
        <TouchableOpacity onPress={this.onChangeStarNum}>
          <Image style={styles.starimage}
            source={imgArr[this.state.starNum - 1].image}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
      justifyContent: 'center'
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
