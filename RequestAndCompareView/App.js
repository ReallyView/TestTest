import React from 'react'
import { StyleSheet, Text, View, TextInput, Alert, Button, Image, Animated } from 'react-native'
import ApolloClient from 'apollo-boost'
import reviewDataArrayQuery from './reviewDataArrayQuery'

const client = new ApolloClient({
  uri: 'https://reallyview-server-cddrycqerc.now.sh/graphql'
})

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text_product1: '',
      text_product2: '',
      reviewDataArray: null,
      name: null,
      starNumAverage1: null,
      starNumAverage2: null,
      disabled: false
    }
    this.index = 1,
    this.animatedValue = new Animated.Value(0),
    this.getData()

  }

   getData () {
    client
      .query({
        query: reviewDataArrayQuery
      }).then(result => {
      console.log(result)
      this.setState({
        reviewDataArray: result,
        name: result.data.compareItems.name,
        starNumAverage1: result.data.compareItems.starNumAverage1,
        starNumAverage2: result.data.compareItems.starNumAverage2,
        compareItem: result.data.compareItem,
      })
    })
  }

  _PressReqButton (){
    Alert.alert('', 'reqButton')
    //<TextInput style={{height: 300}} placeholder='요청할 내용을 입력해 주세요' onChangeText={(text) => this.setState({text})}/>
  }
  _PressComButton () {
    this.animatedValue.setValue(0)
    let newlyAddedValue = { index: this.index }
    this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start(() => {
        this.index = this.index + 1
        this.setState({ disabled: false })
      })
    })
  }

  render() {
    const oneStar = require('../Images/GradeStars/1-star.png')
    const twoStar = require('../Images/GradeStars/2-star.png')
    const threeStar = require('../Images/GradeStars/3-star.png')
    const fourStar = require('../Images/GradeStars/4-star.png')
    const fiveStar = require('../Images/GradeStars/5-star.png')
    const starImages = [
      oneStar,
      twoStar,
      threeStar,
      fourStar,
      fiveStar
    ]

    const animationValue = this.animatedValue.interpolate(
      {
        inputRange: [ 0, 1 ],
        outputRange: [ -59, 0 ]
      })

      let Array = this.setState.comparItem.map((item, key)=> {
        if((key) === this.index) {
          return (
            <Animated.View key={key} style={[{ opacity: this.animatedValue }]}>
              <Image stlye={styles.star} source={starImages[this.setState.starNumAverage1 - 1]}/>
              <Text>{this.setState.name}</Text>
              <Image stlye={styles.star} source={starImages[this.setState.starNumAverage2 - 1]}/>
            </Animated.View>
          )
        }else{
        return(
          <Animated.View key={key} style={[{ opacity: this.animatedValue }]}>
            <Image stlye= {styles.star} source={starImages[this.setState.starNumAverage1-1]}/>
            <Text>{this.setState.name}</Text>
            <Image stlye= {styles.star} source={starImages[this.setState.starNumAverage2-1]}/>
          </Animated.View>
        )
        }
      })


    return (
      <View style={styles.container}>
        <View>
          {Array}
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.enter}>
            <Text style={styles.productSize}>제품</Text>
            <TextInput style={{height: 40, borderWidth: 30}} placeholder='제품명을 입력해주세요' onChangeText={(text_product1) => this.setState({text_product1})}/>
            <View style={{height: 30}}>
              <Button title={'요청하기'} onPress={this._PressReqButton}/>
            </View>
          </View>
          <View style={styles.enter}>
            <Text style={styles.productSize}>제품</Text>
            <TextInput style={{height: 40, borderWidth: 30}} placeholder='제품명을 입력해주세요' onChangeText={(text_product2) => this.setState({text_product2})}/>
            <View style={{height: 30}}>
              <Button title={'비교하기'} onPress={this._PressComButton()}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  enter: {
    flex: 1,
    alignItems: 'center',

  },
  productSize: {
    fontSize: 30
  }
});
