import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class SubmitReviewMain extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onChangeImage} style={styles.addImageButton}>
          <Text style={styles.addImageText}>
            + 이미지 추가 (최대 5장)
          </Text>
        </TouchableOpacity>
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
  addImageButton: {
    width: 350,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  addImageText: {
    fontSize: 25,
    color: 'white'
  }
})
