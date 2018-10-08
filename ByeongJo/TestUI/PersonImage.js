//
// 작성자 : 김성식
// class : PersonImage
// 설명 : ReviewCard class 에 들어갈 component
// 받아야 할 props :
// personImageUrl(String)
//

import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class PersonImage extends React.Component {
  render () {
    return (
      <View>
        <Image style={styles.imageIcon}
          source={{ uri: this.props.personImageUrl }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 50,
    height: 50
  }
})
