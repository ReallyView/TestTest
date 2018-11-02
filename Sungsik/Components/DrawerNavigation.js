//
// 작성자 : 김병조
// class : Drawer
// 설명 : createDrawerNavigator 구현.
// 받아야 할 props : 없음.

import { createDrawerNavigator } from 'react-navigation'
import MainView from './MainView'

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: MainView
    }
  }
)

export default Drawer
