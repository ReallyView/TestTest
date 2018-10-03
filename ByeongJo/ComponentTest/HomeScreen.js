import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'


class Header extends Component {
  render () {
    return (
      <View style={{ backgroundColor: 'red', height: 24 }}>
        <Text />
      </View>
    )
  }
}

class LeftContent extends Component {
  render () {
    return (
      <Icon
        name='ios-menu'
        size={40}
        onPress={() => this.props.navigation.openDrawer()}
      />
    )
  }
}

class CenterContent extends Component {
  render () {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 25 }}>뉴스피드</Text>
        <Menu>
          <MenuTrigger>
            <Icon
              name='ios-search'
              size={40}
            />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{ width: 100 }}>
            <MenuOption onSelect={() => alert(`HOT`)}>
              <Text style={{ textAlign: 'center' }}>HOT</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`최근순`)}>
              <Text style={{ textAlign: 'center' }}>최근순</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert('카테고리1')}>
              <Text style={{ textAlign: 'center' }}>카테고리1</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`카테고리2`)}>
              <Text style={{ textAlign: 'center' }}>카테고리2</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    )
  }
}

class RightContent extends Component {
  render () {
    return (
      <Menu>
        <MenuTrigger>
          <Icon
            name='ios-add-circle-outline'
            size={40}
          />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{ marginTop: 40, width: 100 }}>
          <MenuOption onSelect={() => this.props.navigation.navigate('랜덤')}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>랜덤</Text>
          </MenuOption>
          <MenuOption onSelect={() => this.props.navigation.navigate('투표')}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>투표</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    )
  }
}

class MainContent extends Component {
  render () {
    return (
      <MenuProvider>
        <View>
          <Header />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <LeftContent />
            <CenterContent />
            <RightContent />
          </View>
        </View>
      </MenuProvider>
    )
  }
}

class HomeScreen extends Component {
  render () {
    return (
      <MenuProvider>
        <View>
          <Header />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <LeftContent />
            <CenterContent />
            <RightContent />
          </View>
        </View>
      </MenuProvider>
    )
  }
}
/*
class HomeScreen extends Component {
  render () {
    return (
      <MenuProvider>
      <View>
        <Header />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Icon
            name='ios-menu'
            size={40}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <CenterContent />
          <RightContent />
        </View>
      </View>
    </MenuProvider>
  )
  }
} */
export default HomeScreen
