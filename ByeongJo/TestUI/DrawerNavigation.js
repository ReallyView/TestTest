import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import Vote from './Vote'
import Subscript from './Subscript'
import Reply from './Reply'

const Drawer = createDrawerNavigator (
  {
    Home : {
      screen : HomeScreen
    },
    Vote: {
      screen : Vote
    },
    Subscript: {
      screen : Subscript
    },
    Reply : {
      screen : Reply
    }
  }
)

export default Drawer