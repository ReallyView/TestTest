//
// 작성자 : 김수진
// class : NavBar - ItemName 을 받아오면, 제목으로 설정한다.
// import 하는 Component : Buttons, Contents
// 전달 받을 state : ItemName
//

import React from 'react';
import View from 'react-native';
import Buttons from './Buttons';
import Contents from './Contents'

class NavBar extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state || {};

        return {
            title: params ? params.ItemName : 'Reviews',
        };
      };
      render() {
        return(<View/>)
      }
}

class ItemReviewsView extends React.Component {
    render() {
        return (
            <View>
                <NavBar />
                <Buttons/>
                <Contents/>
            </View>
        )
    }
}

export default ItemReviewsView;
