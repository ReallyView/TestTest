import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default class PersonIcon extends React.Component {
  render () {
    return (
      <Ionicons
        name='md-person'
        size={35}
        onPress={this.props.openDrawer}
        style={{ margin: 5 }}
      />
    )
  }
}
