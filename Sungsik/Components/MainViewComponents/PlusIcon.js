import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default class PlusIcon extends React.Component {
  render () {
    return (
      <Ionicons
        name='md-add'
        size={30}
        onPress={this.props.goSubmit}
        style={{ margin: 7 }}
      />
    )
  }
}
