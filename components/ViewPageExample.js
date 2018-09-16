/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewPagerAndroid,
} from 'react-native';

export default class ViewPageExample extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.container}
        initiaPage={0}
        onPageScroll={(event) => {
          console.log(`offset = ${event.nativeEvent.offset}`);
        }}
        onPageScrollStateChanged={(state) => {
          console.log(`Scrolling state = ${state}`);
        }}
        onPageSelected={(event) => {
          console.log(`Scrolled to page: ${event.nativeEvent.position}`);
        }}>
        <View style={{backgroundColor: 'lightseagreen'}}>
          <Text style={styles.textType}>Screen 1</Text>
        </View>
        <View style={{backgroundColor: 'palevioletred'}}>
          <Text style={styles.textType}>Screen 1</Text>
        </View>
        <View style={{backgroundColor: 'salmon'}}>
          <Text style={styles.textType}>Screen 1</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textType: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
    textAlign: 'center',
  },
});
