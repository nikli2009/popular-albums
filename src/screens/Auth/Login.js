// @format
// @flow
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableHighlight
} from 'react-native';

type Props = {};
type State = {};

class Login extends Component<Props, State> {
  handleOnPress = (e: any) => {
    // eslint-disable-next-line no-console
    console.log('e', e);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleOnPress}>
          <Text>Please Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
