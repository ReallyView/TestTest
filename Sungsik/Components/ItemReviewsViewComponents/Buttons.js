//
// 작성자 : 김수진
// class : Buttons - 리뷰에 대한 요청을 하는 버튼과 리뷰 정렬 버튼이 존재한다.
//         요청 (리뷰 요청하는 칸으로 이동)
//         정렬 (좋아요 / 최신순 으로 정렬하는 버튼)
//

import React from 'react'
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

class Buttons extends React.Component {
  render () {
    return (
      <View style={styles.topButtons}>
        <TouchableOpacity style={{ margin: 10 }}
          onPress={() => { Alert.alert('Request', '요청하기') }}
        >
          <Text style={styles.customBtnText}>요청</Text>
        </TouchableOpacity>
        <Text />
        <TouchableOpacity style={{ margin: 10, marginLeft: 0 }}
          onPress={() => { Alert.alert('Filter', '정렬하기') }}
        >
          <Text style={styles.customBtnText}>정렬</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  customBtnText: {
    color: '#1E90FF',
    alignItems: 'center'
  }
})

export default Buttons
