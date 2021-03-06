//
// 작성자 : 김병조
// 설명 : MainView에 들어갈 기본적인 class들과 MainView class 구현
// 받아야 할 props : 없음.

import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class BlankBar extends Component {
  render () {
    return (
      <View style={{ height: '3%' }} />
    )
  }
}

class PersonIcon extends Component {
  render () {
    return (
      <Icon
        name='md-person'
        size={40}
        onPress={this.props.openDrawer}
      />
    )
  }
}

class AppName extends Component {
  render () {
    return (
      <View style={styles.HeaderLayout}>
        <Text style={{ fontSize: 30 }}>ReallyView</Text>
        <Icon
          name='ios-search'
          size={40}
          onPress={this.props.goSearch}
        />
      </View>
    )
  }
}

class PlusIcon extends Component {
  render () {
    return (
      <Icon
        name='md-add'
        size={40}
        onPress={() => alert('plus')}
      />
    )
  }
}
class Header extends Component {
  render () {
    return (
      <View style={styles.HeaderLayout}>
        <PersonIcon openDrawer={this.props.openDrawer} />
        <AppName goSearch={this.props.GoSearch}/>
        <PlusIcon />
      </View>
    )
  }
}

class Contents extends Component {
  render () {
    return (
      <ScrollView>
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
        <View style={styles.BlankLayout} />
        <View style={styles.ContentLayout} />
      </ScrollView>
    )
  }
}
class Bottom extends Component {
  render () {
    return (
      <View style={styles.BottomLayout}>
        <View style={styles.TabLayout}>
          <Icon
            name='md-home'
            size={40}
          />
          <Text>home</Text>
        </View>
        <View style={styles.TabLayout}>
          <Icon
            name='md-menu'
            size={40}
          />
          <Text>카테고리</Text>
        </View>
        <View style={styles.TabLayout}>
          <Icon
            name='ios-paper-plane'
            size={40}
          />
          <Text>비교하기</Text>
        </View>
        <View style={styles.TabLayout}>
          <Icon
            name='ios-more'
            size={40}
          />
          <Text>더보기</Text>
        </View>
      </View>
    )
  }
}

class MainView extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <BlankBar />
        <Header openDrawer={() => this.props.navigation.openDrawer()} GoSearch={() => this.props.navigation.navigate('Search')}/>
        <Contents />
        <Bottom />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  HeaderLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ContentLayout: {
    height: 130,
    borderWidth: 2
  },
  BlankLayout: {
    height: 20
  },
  BottomLayout: {
    flexDirection: 'row',
    borderWidth: 1
  },
  TabLayout: {
    borderWidth: 1,
    width: '25%',
    alignItems: 'center'
  }
})

export default MainView
