import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import ItemCard from './ItemCard'

const contentsLayout = {
  borderWidth: 1,
  borderColor: 'gray'
}

export default class Contents extends React.Component {
  render () {
    return (
      <ScrollView>
        {
          this.props.nameArray.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => this.props.navigation.navigate('ItemReviews', { ItemName: this.props.nameArray[index], ItemId: this.props.itemIdArray[index] })}
              >
                <View style={contentsLayout}>
                  <ItemCard
                    key={index}
                    imgUrl={this.props.imgArray[index]}
                    title={this.props.nameArray[index]}
                    navigation={this.props.navigation}
                    itemId={this.props.itemIdArray[index]}
                  />
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    )
  }
}
