import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const tabLayout = {
  borderWidth: 1,
  borderColor: 'gray',
  flex: 1,
  alignItems: 'center'
}

export default class BottomButton extends React.Component {
  render () {
    return (
      <TouchableOpacity
        key={this.props.id}
        style={tabLayout}
        onPress={this.props.onPress}
      >
        <View>
          <Ionicons
            name={this.props.iconName}
            style={{ textAlign: 'center' }}
            size={40}
          />
        </View>
      </TouchableOpacity>
    )
  }
}
