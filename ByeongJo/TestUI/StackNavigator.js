import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Drawer from './DrawerNavigation'
import SearchScreen from './SearchScreen'

const Stack = createStackNavigator (
  {
    Home : {
      screen : Drawer,
      navigationOptions : {
        header : null
      }
    },
    Search : {
      screen : SearchScreen
    }
  }
)

export default Stack