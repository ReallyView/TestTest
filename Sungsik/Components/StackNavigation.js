//
// 작성자 : 김병조
// class : Stack
// 설명 : createStackNavigator 구현.
// 받아야 할 props : 없음.

import { createStackNavigator } from 'react-navigation'
import Drawer from './DrawerNavigation'
import SearchView from './SearchView'
import ItemReviewsView from './ItemReviewsView'
import SubmitReviewMain from './SubmitReviewMain'
import RequestAndCompareView from './RequestAndCompareView'

const Stack = createStackNavigator(
  {
    Main: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: SearchView,
      navigationOptions: () => ({
        title: '검색'
      })
    },
    SubmitReview: {
      screen: SubmitReviewMain,
      navigationOptions: () => ({
        title: '리뷰 등록'
      })
    },
    ItemReviews: {
      screen: ItemReviewsView
    },
    RequestAndCompare: {
      screen: RequestAndCompareView
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

export default Stack
