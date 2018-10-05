import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import Vote from './Vote'
import Subscript from './Subscript'
import Reply from './Reply'
import { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

class PersonIcon extends Component {
  render () {
    return (
      <Icon
        name = 'md-person'
        size = {40}
      />
    )
  }
}

const Drawer = createDrawerNavigator (
  {
    Home : {
      screen : HomeScreen
    },
    Vote: {
      screen : Vote
    },
    Subscript: {
      screen : Subscript
    },
    Reply : {
      screen : Reply
    }
  }
)

export default Drawer