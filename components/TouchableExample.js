/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export default class TouchableExample extends Component {
  _onPressButton = () => {
    alert("You pressed the button!")
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor='red'
          // onShowUnderlay={() => {
          //   alert("onShowUnderlay button!")
          // }}
          >
          <View style={styles.view1}>
            {/* <Image style={styles.image} source={require('../images/btn_bg.png')}/> */}
            <Text style={styles.text1}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          useForeground={false}
          >
          <View style={styles.view2}>
            <Text style={styles.text2}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableOpacity
          onPress={this._onPressButton}
          activeOpacity={0.5}
          >
            <View style={styles.view3}>
              <Text style={styles.text2}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableWithoutFeedback
            // onPress={this._onPressButton}
            onLongPress={()=>{
              alert("onLongPress")
            }}
            // onPressIn={()=>{
            //   alert("onPressIn")
            // }}
            // onPressOut={()=>{
            //   alert("onPressOut")
            // }}
            // disabled={true}
            >
              <View style={styles.view4}>
                <Text style={styles.text2}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    backgroundColor: 'green',
  },
  text1: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: 200,
    height: 60
  },
  view2: {
    width: 300,
    height: 50,
    margin: 20,
    backgroundColor: 'blue',
  },
  text2: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  view3: {
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: 'red',
  },
  view4: {
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: 'purple',
  },
});
