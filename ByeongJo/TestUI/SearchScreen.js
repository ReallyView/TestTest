//
// 작성자 : 김병조
// class : SearchSceen
// 설명 : SearchScreen 구현, createStackNavigator에 들어갈 UI.
// 전달 할 state : ItemName

import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ItemName: 'Null'
    }
  }
  render () {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{ width: '30%' }}
            maxLength={30}
            placeholder={this.state.ItemName}
            onChangeText={(ItemName) => this.setState({ ItemName })}
          />
          <Button
            title='검색'
          />
        </View>
        <View>
          <Text>{this.state.ItemName}</Text>
        </View>
      </View>
    )
  }
}

export default SearchScreen
