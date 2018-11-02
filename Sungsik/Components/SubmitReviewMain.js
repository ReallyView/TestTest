import React from 'react'
import { View, Text } from 'react-native'
import SubmitReviewTitle from './SubmitReviewComponents/SubmitReviewTitle'
import SubmitReviewText from './SubmitReviewComponents/SubmitReviewText'
import SubmitReviewImage from './SubmitReviewComponents/SubmitReviewImage'
import SubmitReviewGradeGroup from './SubmitReviewComponents/SubmitReviewGradeGroup'
import SubmitReviewButton from './SubmitReviewComponents/SubmitReviewButton'

export default class SubmitReviewMain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      author: 0,
      title: '',
      reviewText: '',
      grades: [
        { name: '', starNum: 1 }
      ]
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeReviewText = this.onChangeReviewText.bind(this)
    this.onChangeImage = this.onChangeImage.bind(this)
    this.getGrades = this.getGrades.bind(this)
    this.addGrade = this.addGrade.bind(this)
    this.finishSubmit = this.finishSubmit.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeStarNum = this.onChangeStarNum.bind(this)
  }
  onChangeTitle (title) {
    this.setState({
      title: title
    })
  }
  onChangeReviewText (reviewText) {
    this.setState({
      reviewText: reviewText
    })
  }
  onChangeImage (imageUrls) {
    // 이후 추가
  }
  onChangeName (name, index) {
    let tempGrades = this.state.grades
    tempGrades[index].name = name
    this.setState({
      grades: tempGrades
    })
  }
  onChangeStarNum (starNum, index) {
    let tempStarNum = (starNum < 5) ? starNum + 1 : 1
    let tempGrades = this.state.grades
    tempGrades[index].starNum = tempStarNum
    this.setState({
      grades: tempGrades
    })
  }
  addGrade () {
    let tempGrades = this.state.grades
    tempGrades.push({ name: '', starNum: 1 })
    this.setState({
      grades: tempGrades
    })
  }
  getGrades () {
    return this.state.grades
  }
  finishSubmit () {
    this.props.navigation.navigate('Main')
  }
  render () {
    return (
      <View>
        <SubmitReviewTitle onChangeTitle={this.onChangeTitle} />
        <SubmitReviewText onChangeReviewText={this.onChangeReviewText} />
        <SubmitReviewImage onChangeImage={this.onChangeImage} />
        <Text style={{ margin: 10, fontSize: 20 }}>
          별점
        </Text>
        <SubmitReviewGradeGroup addGrade={this.addGrade} getGrades={this.getGrades} grades={this.state.grades}
          onChangeName={this.onChangeName} onChangeStarNum={this.onChangeStarNum} />
        <SubmitReviewButton
          author={this.state.author}
          name={this.state.title}
          text={this.state.reviewText}
          grades={this.state.grades}
          finishSubmit={this.finishSubmit} />
      </View>
    )
  }
}
