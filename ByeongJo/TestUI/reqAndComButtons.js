// 작성자: 김민정
// 설명: requestAndCompareView 기본 UI 구현
//       -제품 입력란 및 요청, 비교하기 버튼
// *서버에서 별점 받아와야 함

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button} from 'react-native';



export default class reqAndComButtons extends React.Component {
  constructor(props){
    super(props);
    this.state={text: ''}
  }

  _PressReqButton (){
    Alert.alert('', 'reqButton')
    //<TextInput style={{height: 300}} placeholder='요청할 내용을 입력해 주세요' onChangeText={(text) => this.setState({text})}/>
  }
  _PressComButton(){
    Alert.alert('', 'comButton')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.enter}>
            <Text style={styles.productSize}>제품</Text>
            <TextInput style={{height: 40, borderWidth: 30}} placeholder='제품명을 입력해주세요' onChangeText={(text) => this.setState({text})}/>
            <View style={{height: 30}}>
              <Button title={'요청하기'} onPress={this._PressReqButton}/>
            </View>
          </View>
          <View style={styles.enter}>
            <Text style={styles.productSize}>제품</Text>
            <TextInput style={{height: 40, borderWidth: 30}} placeholder='제품명을 입력해주세요' onChangeText={(text) => this.setState({text})}/>
            <View style={{height: 30}}>
              <Button title={'비교하기'} onPress={this._PressComButton}/>
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
