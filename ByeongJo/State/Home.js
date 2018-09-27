import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
  state = {
    myState : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  }
  change = () => this.setState({myState: 'HelloWorld'})
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.change}>
          {this.state.myState}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home
