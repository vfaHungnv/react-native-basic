/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TestCSS extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.firstText}>First line</Text>
        <Text style={styles.secondText}>Second line</Text>
        <Text style={[styles.firstText,styles.secondText]}>Second line</Text>
        <Text style={[styles.secondText,styles.firstText]}>Second line</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#28B463',
    borderWidth: 2,
    borderColor: '#1F618D',
  },
  firstText: {
      margin: 5,
      color: 'white',
  },
  secondText: {
      margin: 5,
      color: 'yellow',
      fontWeight: 'bold',
      fontSize: 20,
  },
});
