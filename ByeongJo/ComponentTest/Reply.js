import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

class Reply extends Component {
    render() {
        return(
            <View>
                <View style={{backgroundColor:"red", height: 24}}>
                    <Text></Text>
                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Icon
                        name="ios-menu"
                        size={40}
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                </View>
            </View>
        );
    }
}

export default Reply;
