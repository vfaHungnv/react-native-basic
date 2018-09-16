/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FixedDimension extends Component {
  render() {
    return (
        <View>
            <View style={styles.view1}>
              <Text style={styles.text}>View1</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text}>View2</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text}>View3</Text>
            </View>
            <View style={styles.view4}>
              <Text style={styles.text}>View4</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
  },
  view2: {
    width: 100,
    height: 50,
    backgroundColor: 'green',
  },
  view3: {
    width: 100,
    height: 50,
    backgroundColor: 'yellow',
  },
  view4: {
    width: 100,
    height: 50,
    backgroundColor: 'cyan',
  },
  text: {
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
  }
});
