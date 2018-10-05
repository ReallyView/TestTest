import React from 'react';
import HomeScreen from './HomeScreen'
import { createDrawerNavigator } from 'react-navigation'
import Vote from './Vote'
import Subscript from './Subscript'
import Reply from './Reply'

export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

/*
const Root = createDrawerNavigator (
  {
    vote: {
      screen : Vote
    },
    subscript: {
      screen : Subscript
    },
    reply : {
      screen : Reply
    },
  }
)
*/

/*
const array =  {
  text : "weqwewqwqeq"
}
*/