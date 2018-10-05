import { createStackNavigator } from 'react-navigation'
import Vote from './Vote'
import Subscript from './Subscript'
import Reply from './Reply'
import Drawer from './DrawerNavigation'
import { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react'

const Stack = createStackNavigator (
  {
    Home : {
      screen : Drawer,
      navigationOptions : {
        header : null
      }
    },
    Vote: {
      screen : Vote
    },
    Subscript: {
      screen : Subscript
    },
    Reply : {
      screen : Reply
    },
  }
)

export default Stack