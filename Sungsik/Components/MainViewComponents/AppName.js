import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const headerLayout = {
  flexDirection: 'row',
  justifyContent: 'space-between'
}

export default class AppName extends React.Component {
  render () {
    return (
      <View style={headerLayout}>
        <Text style={{ fontSize: 30 }}>ReallyView</Text>
        <Ionicons
          name='ios-search'
          size={35}
          onPress={this.props.goSearch}
          style={{ marginLeft: 3, marginTop: 2 }}
        />
      </View>
    )
  }
}
