//
// 작성자 : 김병조
// class : Stack
// 설명 : createStackNavigator 구현.
// 받아야 할 props : 없음.

import { createStackNavigator } from 'react-navigation'
import Drawer from './DrawerNavigation'
import SearchScreen from './SearchScreen'

const Stack = createStackNavigator(
  {
    Home: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: SearchScreen
    }
  }
)

export default Stack
