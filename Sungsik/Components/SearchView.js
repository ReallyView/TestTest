//
// 작성자 : 김병조
// class : SearchView
// 설명 : SearchView 구현, createStackNavigator에 들어갈 UI.
// 전달 할 state : ItemName, ItemId

import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import SearchContents from './SearchViewComponents/SearchContents'

class SearchView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: '',
      id: null,
      searchData: null,
      itemArray: []
    }
    this.onClickItemName = this.onClickItemName.bind(this)
  }
  onClickItemName (name) {
    this.setState({
      itemName: name
    })
  }
  render () {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.textInput}
            maxLength={30}
            placeholder='검색할 제품을 입력하세요.'
            onChangeText={(itemName) => this.setState({ itemName: itemName })}
            value={this.state.itemName}
          />
        </View>
        <SearchContents
          style={styles.contents}
          itemName={this.state.itemName}
          onClickItemName={(name) => this.onClickItemName(name)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '50%',
    marginLeft: '25%',
    marginTop: '5%',
    borderBottomWidth: 1,
  },
})

export default SearchView
