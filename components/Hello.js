/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Hello component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
});
