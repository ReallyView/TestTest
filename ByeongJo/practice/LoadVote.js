import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Right} from 'native-base'

class LoadVote extends Component {
  render() {
    return(
      <Container>
        <Header style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <Left>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Right>
            <Icon
              name="ios-search"
            />
          </Right>
        </Header>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>This page show that I load vote</Text>
        </Content>
      </Container>
    );
  }
}

export default LoadVote;
