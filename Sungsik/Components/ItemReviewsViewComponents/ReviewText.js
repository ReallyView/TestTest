//
// 작성자 : 김성식
// class : ReviewText
// 설명 : ReviewCard class 에 들어갈 component
// 받아야 할 props :
// text(String),
// isExtended(Boolean)
//

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class ReviewText extends React.Component {
  componentWillMount () {
    this.setState({
      isExtended: this.props.isExtended
    })
  }
  extendText () {
    this.setState({
      isExtended: true
    })
  }
  simplifyText () {
    this.setState({
      isExtended: false
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text numberOfLines={this.state.isExtended ? 0 : 4}>
          {this.props.text}
        </Text>
        {
          this.state.isExtended
            ? <Button title='간략히 보기' onPress={this.simplifyText.bind(this)} style={styles.button} />
            : <Button title='자세히 보기' onPress={this.extendText.bind(this)} style={styles.button} />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    fontSize: 50
  }
})
