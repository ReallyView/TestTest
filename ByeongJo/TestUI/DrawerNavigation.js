//
// 작성자 : 김병조
// class : Drawer
// 설명 : createDrawerNavigator 구현.
// 받아야 할 props : 없음.

import { createDrawerNavigator } from 'react-navigation'
import MainView from './MainView'
import VoteView from './VoteView'
import SubscriptView from './SubscriptView'
import ReplyView from './ReplyView'

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: MainView
    },
    Vote: {
      screen: VoteView
    },
    Subscript: {
      screen: SubscriptView
    },
    Reply: {
      screen: ReplyView
    }
  }
)

export default Drawer
