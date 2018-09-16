/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from 'react-native';

export default class VerticalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView
        keyboardDismissMode='on-drag'
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        contentContainerStyle={{paddingTop:20}}
        >
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Text style={styles.text}>This is a text</Text>
        <TextInput style={styles.textInput}
          placeholder='Enter text'></TextInput>
        <View style={styles.view1}>
          <Text style={styles.text2}>Text inside a View</Text>
        </View>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
        <Image style={{width: screenWidth, height: screenWidth * 300/300}} source={require('../images/dog.jpg')}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    padding: 15,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'green',
  },
  textInput: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
  view1: {
    backgroundColor: '#a03b51',
    height: 50,
  },
  text2: {
    fontSize: 20,
    padding: 15,
    color: 'white',
    textAlign: 'center',
  },
});
