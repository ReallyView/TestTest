import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Dimensions } from 'react-native'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import ItemNames from './RequestAndCompareViewComponents/ItemNames'
import CompareContents from './RequestAndCompareViewComponents/CompareContents'

const client = new ApolloClient({
  uri: 'http://ec2-13-125-69-81.ap-northeast-2.compute.amazonaws.com:8080/graphql'
})

const deviceWidth = Dimensions.get('window').width * 0.8

export default class RequestAndCompareView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item1Name: '',
      item2Name: '',
      item1Id: null,
      item2Id: null,
      isCompareFinished: false
    }
    this.onClickCompareButton = this.onClickCompareButton.bind(this)
    this.onClickRequestButton = this.onClickRequestButton.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onClickItemName = this.onClickItemName.bind(this)
  }

  onChangeText (text, id) {
    switch (id) {
      case 1:
        this.setState({
          item1Name: text
        })
        break
      case 2:
        this.setState({
          item2Name: text
        })
        break
      default:
    }
  }
  onClickItemName (text, id) {
    this.onChangeText(text, id)
  }
  onClickRequestButton () {
    // 이후 구현
  }
  onClickCompareButton () {
    const itemIdQuery = gql`
    {
      item1: searchItems(name: "${this.state.item1Name}") {
        id
        name
      }
      item2: searchItems(name: "${this.state.item2Name}") {
        id
        name
      }
    }`
    client
      .query({
        query: itemIdQuery
      }).then(result => {
        this.setState({
          item1Id: result.data.item1[0].id,
          item2Id: result.data.item2[0].id
        })
        if (this.state.item1Id && this.state.item2Id) {
          this.setState({
            isCompareFinished: true
          })
        }
      })
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.itemsContainer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.itemName}>제품 1</Text>
            <TextInput style={styles.itemInput}
              placeholder={'제품명을 입력하시오'}
              onChangeText={(text) => this.onChangeText(text, 1)}
              value={this.state.item1Name}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.itemName}>제품 2</Text>
            <TextInput style={styles.itemInput}
              placeholder={'제품명을 입력하시오'}
              onChangeText={(text) => this.onChangeText(text, 2)}
              value={this.state.item2Name} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Button title={'투표 요청하기'} onPress={this.onClickRequestButton} />
          </View>
          <View style={{ justifyContent: 'center', flex: 1 }}>
            <Button title={'비교하기'} onPress={this.onClickCompareButton} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <ItemNames
            onClickItemName={(name) => this.onClickItemName(name, 1)}
            itemName={this.state.item1Name} />
          <ItemNames
            onClickItemName={(name) => this.onClickItemName(name, 2)}
            itemName={this.state.item2Name} />
        </View>
        {
          this.state.isCompareFinished
            ? <CompareContents item1Id={this.state.item1Id} item2Id={this.state.item2Id} />
            : <View />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  itemName: {
    fontSize: 25
  },
  itemInput: {
    width: 150,
    height: 40,
    borderBottomWidth: 0.5
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10
  },
  starImage: {
    width: deviceWidth / 2,
    height: deviceWidth / 12
  }
})
