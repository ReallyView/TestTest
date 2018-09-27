import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import LoadVote from './LoadVote'
import Reply from './Reply'
import Favorite from './Favorite'

class App extends Component {
  render() {
    return(
      <MyApp />
    );
  }
}

const MyApp = createDrawerNavigator ({
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

export default App;

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
