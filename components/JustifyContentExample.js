/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class JustifyContentExample extends Component {
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
    flexDirection: 'row',//'column-reverse',//'row-reverse',//'column', //'row',
    justifyContent: 'flex-start',//'flex-end',
    alignItems: 'stretch',
  },
  text1: {
    width: 50,
    // height: 50,
    color: 'white',
    backgroundColor: 'red',
    marginRight: 5,
  },
  text2: {
    width: 50,
    height: 50,
    color: 'white',
    backgroundColor: 'cyan',
    marginRight: 5,
  },
  text3: {
    width: 50,
    height: 50,
    color: 'white',
    backgroundColor: 'yellow',
    marginRight: 5,
  },
  text4: {
    width: 50,
    height: 50,
    color: 'white',
    backgroundColor: 'blue',
  },
});
