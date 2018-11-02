import React from 'react'
import { View, StyleSheet, Button, ScrollView } from 'react-native'
import SubmitReviewGrade from './SubmitReviewGrade'

export default class SubmitReviewMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grades: this.props.getGrades()
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeStarNum = this.onChangeStarNum.bind(this)
    this.getStarNum = this.getStarNum.bind(this)
  }
  onChangeName (name, index) {
    this.props.onChangeName(name, index)
  }
  onChangeStarNum (starNum, index) {
    this.props.onChangeStarNum(starNum, index)
  }
  getStarNum (index) {
    return this.state.grades[index].starNum
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.gradeContainer}>
          {this.state.grades.map((grade, index) => {
            return (
              <SubmitReviewGrade name={grade.name} starNum={grade.starNum} index={index}
                onChangeName={this.onChangeName} onChangeStarNum={this.onChangeStarNum}
                getStarNum={this.getStarNum} />
            )
          })
          }
        </ScrollView>
        <Button title={'별점 항목 추가하기'} style={styles.addGradeButton} onPress={this.props.addGrade} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  gradeContainer: {
    width: 350,
    height: 100
  },
  addGradeButton: {
    width: 350,
    height: 20
  }
})
