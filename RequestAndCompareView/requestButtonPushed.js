import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image} from 'react-native';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import reqAndComButtons from './RequestAndCompareView'
const client = new ApolloClient({
  uri: 'https://reallyview-server-cddrycqerc.now.sh/graphql'
})

class comButtonPushed extens Component{
  PressComButton (text_product1, text_product2 ) {
    this.setState.value = true
    return this.setState.value
  }
  render(){
    if(!PressComButton){
      return <View/>
    }
    return(
      <View style = {styles.container}>
        {
          this.props.comparItem.map((starNumAvg1)=> {
          return(
            <View style = {styles.enter}>
              <Image stlye= {styles.star} source={starImages[conpareItem.starNumAvg1-1]}/>
              <Text>{compareItem.name}</Text>
              <Image stlye= {styles.star} source={starImages[conpareItem.starNumAvg2-1]}/>
            </View>
          )
          })
        }
        }
      </View>
    )
  }
}

export default class reqAndComButtons extends React.Component {

  render(){
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
    return(
      <View style={styles.container}>
        starNumAvg1
      </View>
    )
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
    star: {
      width: 110,
      height: 30,
    }
  });