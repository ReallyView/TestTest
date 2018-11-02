//
// 작성자 : 김병조
// 설명 : MainView에 들어갈 기본적인 class들과 MainView class 구현
// 받아야 할 props : 없음.
// 보내는 props :
// 1. ItemCard : imgUrl, title, navigation, itemId

import React, { Component } from 'react'
import { View } from 'react-native'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import BlankBar from './MainViewComponents/BlankBar'
import Header from './MainViewComponents/Header'
import Contents from './MainViewComponents/Contents'
import Bottom from './MainViewComponents/Bottom'

const client = new ApolloClient({
  uri: 'http://ec2-13-125-69-81.ap-northeast-2.compute.amazonaws.com:8080/graphql'
})

export default class MainView extends Component {
  constructor (props) {
    super(props)
    this.getData()
    this.state = {
      QueryData: null,
      itemIdArray: [],
      reviewIdArray: [],
      imgArray: [],
      nameArray: [],
      data: false
    }
  }
  getData () {
    const DataQuery = gql`
    {
      items(category: MAIN) {
        id
        name
        reviews {
          id
          imgUrls
        }
      }
    }`
    client
      .query({
        query: DataQuery
      }).then(result => {
        this.setState({
          itemIdArray: [],
          reviewArray: [],
          imgArray: [],
          nameArray: []
        })
        for (var i = 0; i < result.data.items.length; i++) {
          let tempReviewIdArray = []
          let tempImgArray = []
          let tempItemIdArray = []
          let tempNameArray = []
          tempNameArray.push(result.data.items[i].name)
          tempItemIdArray.push(result.data.items[i].id)
          for (var k = 0; k < result.data.items[i].reviews.length; k++) {
            for (var j = 0; j < result.data.items[i].reviews[k].imgUrls.length; j++) {
              tempReviewIdArray.push(result.data.items[i].reviews[k].id)
              tempImgArray.push(result.data.items[i].reviews[k].imgUrls[j])
            }
          }
          this.setState({
            itemIdArray: this.state.itemIdArray.concat(tempItemIdArray),
            reviewArray: this.state.reviewIdArray.concat([tempReviewIdArray]),
            imgArray: this.state.imgArray.concat([tempImgArray]),
            nameArray: this.state.nameArray.concat(tempNameArray)
          })
        }
        this.setState({
          QueryData: result.data.items
        })
      })
  }

  searchData () {
    const DataQuery = gql`
    {
      searchItems(name: "") {
        id
        name
        reviews {
          id
          imgUrls
        }
      }
    }`
    client
      .query({
        query: DataQuery
      }).then(result => {
        this.setState({
          itemIdArray: [],
          reviewArray: [],
          imgArray: [],
          nameArray: []
        })
        for (var i = 0; i < result.data.searchItems.length; i++) {
          let tempReviewIdArray = []
          let tempImgArray = []
          let tempItemIdArray = []
          let tempNameArray = []
          tempNameArray.push(result.data.searchItems[i].name)
          tempItemIdArray.push(result.data.searchItems[i].id)
          for (var k = 0; k < result.data.searchItems[i].reviews.length; k++) {
            for (var j = 0; j < result.data.searchItems[i].reviews[k].imgUrls.length; j++) {
              tempReviewIdArray.push(result.data.searchItems[i].reviews[k].id)
              tempImgArray.push(result.data.searchItems[i].reviews[k].imgUrls[j])
            }
          }
          this.setState({
            itemIdArray: this.state.itemIdArray.concat(tempItemIdArray),
            reviewArray: this.state.reviewIdArray.concat([tempReviewIdArray]),
            imgArray: this.state.imgArray.concat([tempImgArray]),
            nameArray: this.state.nameArray.concat(tempNameArray)
          })
        }
        this.setState({
          QueryData: result.data.searchItems
        })
      })
  }

  render () {
    if (!this.state.QueryData) {
      return (
        <View />
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <BlankBar />
        <Header
          openDrawer={() => this.props.navigation.openDrawer()}
          GoSearch={() => this.props.navigation.navigate('Search')}
          GoSubmit={() => this.props.navigation.navigate('SubmitReview')}
          searchData={() => this.searchData()}
        />
        <Contents
          query={this.state.QueryData}
          imgArray={this.state.imgArray}
          navigation={this.props.navigation}
          itemIdArray={this.state.itemIdArray}
          nameArray={this.state.nameArray}
        />
        <Bottom GoRequest={() => this.props.navigation.navigate('RequestAndCompare')} />
      </View>
    )
  }
}
