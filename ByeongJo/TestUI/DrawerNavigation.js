//
// 작성자 : 김병조
// class : Drawer
// 설명 : createDrawerNavigator 구현.
// 받아야 할 props : 없음.

import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import Vote from './VoteScreen'
import Subscript from './SubscriptScreen'
import Reply from './ReplyScreen'

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Vote: {
      screen: Vote
    },
    Subscript: {
      screen: Subscript
    },
    Reply: {
      screen: Reply
    }
  }
)

export default Drawer
