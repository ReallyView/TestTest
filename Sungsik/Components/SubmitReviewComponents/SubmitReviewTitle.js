import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default class SubmitReviewMain extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title}
          placeholder={'제목을 입력하시오'}
          onChangeText={this.props.onChangeTitle} />
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
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 230,
    fontSize: 30
  }
})
