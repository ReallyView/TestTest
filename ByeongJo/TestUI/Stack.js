//
// 작성자 : 김수진
// class : RootStack - 메인 화면을 ItemReviewsView 로 설정한다.
//         화면 전환에 필요한 상위 클래스들을 쌓는 Stack.
//         MainView 와 SubmitReviewMain 등과 연결 (미완성)
//

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import ItemReviewsView from './ItemReviewsView'

const RootStack = createStackNavigator(
  {
    Main: {
      screen: ItemReviewsView,
      navigationOptions: () => ({
        headerBackTitle: 'Back'
      })
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#f4511e',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

export default RootStack
