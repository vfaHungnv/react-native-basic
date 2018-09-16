/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class FlexExamle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>View 1</Text>
        <Text style={styles.text2}>View 2</Text>
        <Text style={styles.text3}>View 3</Text>
        <Text style={styles.text4}>View 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    flexDirection: 'row',
  },
  text1: {
    flex: 1,
    color: 'white',
    backgroundColor: 'red',
    marginRight: 5,
  },
  text2: {
    flex: 1,
    color: 'white',
    backgroundColor: 'cyan',
    marginRight: 5,
  },
  text3: {
    flex: 1,
    color: 'white',
    backgroundColor: 'yellow',
    marginRight: 5,
  },
  text4: {
    flex: 1,
    color: 'white',
    backgroundColor: 'blue',
  },
});
