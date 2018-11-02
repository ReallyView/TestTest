import React, { Component } from 'react'
import { Container, Button, Header, Left, Icon, Title, Right, Body, Content, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import Expo from 'expo'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      isReady: false
    }
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({
      NanumGothic: require('./assets/fonts/NanumGothic.ttf'),
      Entypo: require('native-base/Fonts/Entypo.ttf'),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
    this.setState({ isReady: true })
  }
  render () {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Hello</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
