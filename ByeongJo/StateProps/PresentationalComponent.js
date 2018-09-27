import React, {Component} from 'react'
import {Text, View} from 'react-native'

const PresentationalComponent = (props) => {
  return (
    <View>
      <Text onPress = {props.change}>
        {props.myState}
      </Text>
    </View>
  )
}
export default PresentationalComponent
