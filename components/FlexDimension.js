/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FlexDimension extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.view1}>
          <Text style={styles.text}>View 1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>View 2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>View 3</Text>
        </View>
        <View style={styles.view4}>
          <Text style={styles.text}>View 4</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  view1: {
    flex: 4,
    backgroundColor: 'cyan',
  },
  view2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  view3: {
    flex: 1,
    backgroundColor: 'red',
  },
  view4: {
    flex: 4,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
  },
});
