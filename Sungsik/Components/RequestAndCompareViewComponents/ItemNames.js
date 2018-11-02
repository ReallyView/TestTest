import React from 'react'
import gql from 'graphql-tag'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { graphql } from 'react-apollo'

const deviceWidth = Dimensions.get('window').width * 0.8

function showItemNames ({ data: { loading, itemArray, variables } }) {
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    let itemNameArray = []
    if (variables.itemName) {
      for (let i = 0; i < itemArray.length; i++) {
        itemNameArray.push(itemArray[i].name)
      }
    }
    return (
      (itemNameArray.length > 0)
        ? <View>
          {
            itemNameArray.map((name, index) => {
              return (
                <TouchableOpacity
                  style={{ width: 0.45 * deviceWidth }}
                  onPress={() => variables.onClickItemName(name)}
                  key={index}
                >
                  <Text>{name}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
        : (variables.itemName
          ? <Text style={{ width: 0.45 * deviceWidth }}>찾은 결과가 없습니다.</Text>
          : <View style={{ width: 0.45 * deviceWidth }} />)
    )
  }
}

export default graphql(gql`
  query ($itemName: String!) {
    itemArray: searchItems(name: $itemName) {
      id
      name
    }
  }
`, {
  options: props => {
    return ({
      variables: {
        itemName: props.itemName,
        onClickItemName: props.onClickItemName
      }
    })
  }
})(showItemNames)
