//
// 작성자 : 김수진
// class : NavBar - ItemName 을 받아오면, 제목으로 설정한다.
// import 하는 Component : Buttons, Contents
// 전달 받을 state : ItemName
//

import React from 'react'
import { View } from 'react-native'
import Buttons from './ItemReviewsViewComponents/Buttons'
import Contents from './ItemReviewsViewComponents/Contents'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://ec2-13-125-69-81.ap-northeast-2.compute.amazonaws.com:8080/graphql'
})

class ItemReviewsView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('ItemName', 'Default'),
    };
  };
  constructor (props) {
    super(props)
    this.state = {
      reviewDataArray: null,
      likeNumArray: [],
      dislikeNumArray: [],
      id: this.props.navigation.getParam('ItemId', '1')
    }
    this.getData()
    this.onClickLikeButton = this.onClickLikeButton.bind(this)
    this.onClickDislikeButton = this.onClickDislikeButton.bind(this)
  }

  onClickLikeButton (id, index) {
    return () => {
      const temp = this.state.likeNumArray
      temp[index]++
      this.setState({
        likeNumArray: temp
      })
      const increaseLikeNum = gql`
        mutation {
          increaseLikeNum (
            id: "${id}"
          )
          {
            likeNum
          }
        }
      `
      client.mutate({
        mutation: increaseLikeNum
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  onClickDislikeButton (id, index) {
    return () => {
      let temp = this.state.dislikeNumArray
      temp[index]++
      this.setState({
        dislikeNum: temp
      })
      const increaseDislikeNum = gql`
        mutation {
          increaseDislikeNum (
            id: "${id}"
          )
          {
            dislikeNum
          }
        }
      `
      client.mutate({
        mutation: increaseDislikeNum
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  getData () {
    const reviewDataArrayQuery = gql`
{
  item(id: ${this.state.id}) {
    id
    name
    reviews {
      id
      author {
        id
        name
        profileImgUrl
      }
      imgUrls
      text
      grades {
        id
        name
        starNum
      }
      likeNum
      dislikeNum
    }
  }
}`
    client
      .query({
        query: reviewDataArrayQuery
      }).then(result => {
        for (var i = 0; i < result.data.item.reviews.length; i++) {
          let tempLikeNumArray = this.state.likeNumArray
          let tempDislikeNumArray = this.state.dislikeNumArray
          tempLikeNumArray.push(result.data.item.reviews[i].likeNum)
          tempDislikeNumArray.push(result.data.item.reviews[i].dislikeNum)
          this.setState({
            likeNumArray: tempLikeNumArray,
            dislikeNumArray: tempDislikeNumArray
          })
        }
        this.setState({
          reviewDataArray: result
        })
      })
  }

  render () {
    if (!this.state.reviewDataArray) {
      return <View />
    }
    return (
      <View>
        <Buttons />
        <Contents reviewDataArray={this.state.reviewDataArray}
          likeNumArray={this.state.likeNumArray}
          dislikeNumArray={this.state.dislikeNumArray}
          onClickLikeButton={this.onClickLikeButton}
          onClickDislikeButton={this.onClickDislikeButton} />
      </View>
    )
  }
}

export default ItemReviewsView
