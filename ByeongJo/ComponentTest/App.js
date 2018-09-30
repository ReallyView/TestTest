import React, { Component } from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import LoadVote from './LoadVote'
import Reply from './Reply'
import Favorite from './Favorite'
import Random from './Random'
import Vote from './Vote'

class App extends Component {
  render () {
    return (
      <RootStack />
    )
  }
}

const MyApp = createDrawerNavigator({
  홈: {
    screen: HomeScreen
  },
  '내가 올린 투표': {
    screen: LoadVote
  },
  '댓글 올린 것': {
    screen: Reply
  },
  즐겨찾기: {
    screen: Favorite
  },
  설정: {
    screen: SettingsScreen
  }
})

const RootStack = createStackNavigator(
  {
    홈: {
      screen: MyApp,
      navigationOptions: {
        header: null
      }
    },
    랜덤: {
      screen: Random,
      navigationOptions: {
        header: null
      }
    },
    투표: {
      screen: Vote,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: '홈'
  }
)

export default App
