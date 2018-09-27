import React, { Component } from 'react';
import { Alert, AppRegistry, View, StyleSheet,
        Text, TextInput, Button, Platform,
        TouchableHighlight,
        ScrollView, Image
      } from 'react-native';


export default class FlexDirectionBasics extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }
  _onPressButton() {
    Alert.alert(
      '',
      '항목을 더 추가 하시겠습니까?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    // document.querySelector('main_section').append(element)
  }

  _onPressBack() {
    Alert.alert('정말 뒤로 돌아가시겠습니까?')
  }
  _onPressMake(){
    Alert.alert('정말 끝내 시겠습니까?')
  }

  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={style.container}>
        <View style={style.top}>
        </View>
<ScrollView>
        <View style={style.topINScroll}>
            <View style={style.backbox}>
              <Button
              onPress={this._onPressBack}
              title=" < Back "
              />
            </View>
            <View style={{width:170}}/>
            <View style={style.backbox}>
              <Button
              onPress={this._onPressMake}
              title=" Make > "
              />
            </View>
        </View>
<View id="main_section">
        <View style={style.firstLow}>
          <View style={style.textIn}>
                <Text style={style.textINZA}> 인자1 : </Text>
          </View>
          <View style={style.betweenText}/>
          <View style={style.textBox}>
                <TextInput style={{height:80}}
                  placeholder=" 입력하시오 "
                  onChangeText={(text) => this.setState({text})}
                />
          </View>
        </View>

        <View style={style.firstLow}>
          <View style={style.textIn}>
                <Text style={style.textINZA}> 인자2 : </Text>
          </View>
          <View style={style.betweenText}/>
          <View style={style.textBox}>
                <TextInput style={{height:80}}
                  placeholder=" 입력하시오 "
                  onChangeText={(text) => this.setState({text})}
                />
          </View>
        </View>

        <View style={style.firstLow}>
          <View style={style.textIn}>
                <Text style={style.textINZA}> 인자3 : </Text>
          </View>
          <View style={style.betweenText}/>
          <View style={style.textBox}>
                <TextInput style={{height:80}}
                  placeholder=" 입력하시오 "
                  onChangeText={(text) => this.setState({text})}
                />
          </View>
        </View>
</View>
</ScrollView>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={style.buttonLow}>
            <Text style={style.buttonText}> 인자추가 </Text>
          </View>
        </TouchableHighlight>
        <View style={style.botton}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  top:{
    height: 20
  },
  topINScroll:{
    height: 40,
    flexDirection: 'row',
    // backgroundColor: 'black'
  },
  backbox:{
    marginBottom: 5,
    marginLeft: 10,
    borderRadius: 10,
    height: 40,
    width: 80
  },
  botton: {
    height: 7
  },
  firstLow:{
    marginBottom: 10,
    flexDirection: 'row'
  },
  betweenText:{
    height:100,
    width:5
  },
  textIn:{
    width: 100, height: 100, //backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  textBox:{
    width: 250, height: 100, //backgroundColor: 'steelblue',
    borderRadius: 10, borderWidth: 3, borderColor: 'gray'
  },
  textINZA: {
    fontSize: 25,
    color: 'red',
    textAlign:'center',
    paddingTop: 35
  },
  buttonLow:{
    margin: 10,
    // marginBottom: 10,
    width: 340,
    alignItems:'center',
    backgroundColor: 'skyblue'
  },
  buttonText: {
    fontSize: 30,
    padding: 30,
    color: 'white'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
