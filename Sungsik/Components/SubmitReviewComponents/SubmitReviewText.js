import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default class SubmitReviewMain extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.text}
          placeholder={'리뷰을 입력하시오'}
          onChangeText={this.props.onChangeReviewText} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 170,
    fontSize: 15,
    backgroundColor: 'gray',
    padding: 25,
    color: 'white'
  }
})
