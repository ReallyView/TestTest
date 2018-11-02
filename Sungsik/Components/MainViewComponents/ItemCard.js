import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

const { width } = Dimensions.get('window') * 0.7
const height = width

class Carousel extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 30 }}>{this.props.title}</Text>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {
              this.props.images.map((image, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.props.navigation.navigate('ItemReviews', { ItemName: this.props.title, ItemId: this.props.itemId })}
                  >
                    <Image style={{ height: 100, width: 100, marginRight: 5, marginLeft: 5 }}
                      source={{ uri: image }} />
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default class ItemCard extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Carousel
          images={this.props.imgUrl}
          title={this.props.title}
          navigation={this.props.navigation}
          itemId={this.props.itemId}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight - 20
  },
  scrollContainer: {
    height
  },
  image: {
    width,
    height
  }
})
