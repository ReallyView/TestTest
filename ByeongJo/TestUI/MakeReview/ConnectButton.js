import React from 'react'
import { View, Text, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView, Image } from 'react-native'
import GradeStar from './GradeStar.js'
import SubmitButton from './SubmitButton.js'

export default class ConnectButton extends React.Component {
  constructor () {
    super()
    this.state = { valueArray: [], disabled: false }
    this.index = 1
    this.animatedValue = new Animated.Value(0)
  }

  addMore = () =>
  {
       this.animatedValue.setValue(0);
       let newlyAddedValue = { index: this.index }
       this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
       {
           Animated.timing(
               this.animatedValue,
               {
                   toValue: 1,
                   duration: 500,
                   useNativeDriver: true
               }
           ).start(() =>
           {
               this.index = this.index + 1;
               this.setState({ disabled: false });
           });
       });
   }
  render () {
    const animationValue = this.animatedValue.interpolate(
      {
        inputRange: [ 0, 1 ],
        outputRange: [ -59, 0 ]
      })

    let newArray = this.state.valueArray.map((item, key) => {
      if ((key) === this.index) {
        return (
          <Animated.View key={key} style={[styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
            <GradeStar />
          </Animated.View>
        )
      } else {
        return (
          <View key={key} style={styles.viewHolder}>
            <GradeStar />
          </View>
        )
      }
    })

// 여기서 부터는 real 로 보이는 UI구간
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
           <GradeStar />
            {
              newArray
            }
          </View>
        </ScrollView>

        <View style={styles.background}>
          <TouchableOpacity activeOpacity={0.8} disabled={this.state.disabled} onPress={this.addMore}>
            <Text style={styles.nameText}> ☆평점 추가하기 </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 0.3,
    backgroundColor: '#eee',
    justifyContent: 'center',
    // paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  viewHolder:
  {
    height: 55,
    backgroundColor: '#26A69A',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },
  background: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    width: 200,
    height: 30
  },
  nameText: {
    fontSize: 15
  }
})
