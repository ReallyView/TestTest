//
// 작성자 : 김성식
// class : ImageGroup
// 설명 : ReviewCard class 에 들어갈 component
// 받아야 할 props :
// imageUrl : [
//   (String),
//   (String)...
// ]
//

import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class ImageGroup extends React.Component {
  render () {
    return (
      <View>
        <Image style={styles.itemImage}
          source={{ uri: this.props.imageUrl }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemImage: {
    width: 130,
    height: 130
  }
})
