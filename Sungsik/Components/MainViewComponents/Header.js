import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PersonIcon from './PersonIcon'
import AppName from './AppName'
import PlusIcon from './PlusIcon'

const headerLayout = {
  flexDirection: 'row',
  justifyContent: 'space-between'
}

export default class Header extends React.Component {
  render () {
    return (
      <View style={headerLayout}>
        <PersonIcon openDrawer={this.props.openDrawer} />
        <AppName goSearch={this.props.GoSearch} />
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name='md-refresh'
            size={30}
            onPress={this.props.searchData}
            style={{ margin: 7 }}
          />
          <PlusIcon goSubmit={this.props.GoSubmit} />
        </View>
      </View>
    )
  }
}
