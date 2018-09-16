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

export default class HorizontalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
    return (
      <ScrollView
        // contentContainerStyle={{paddingTop:20}}
        horizontal={true}
        pagingEnable={true}
        showsHorizontalScrollIndicator={true}
        // scrollIndicatorInsets={{top:10, left:10, right:10, bottom:10}}
        onMomentumScrollBegin={()=>{
          alert('Begin scrolling')
        }}
        onMomentumScrollEnd={()=>{
          alert('End scrolling')
        }}
        onScroll={(event)=>{
          let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
          console.log(logData);
        }}
        scrollEventThrottle={10}
        >
        <View style={{
          backgroundColor: '#5f9ea0',
          flex: 1,
          marginTop: 20,
          width: screenWidth,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, padding: 15, color: 'white', textAlign: 'center'}}>Screen 1</Text>
        </View>
        <View style={{
          backgroundColor: 'tomato',
          flex: 1,
          marginTop: 20,
          width: screenWidth,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, padding: 15, color: 'white', textAlign: 'center'}}>Screen 2</Text>
        </View>
        <View style={{
          backgroundColor: '#663399',
          flex: 1,
          marginTop: 20,
          width: screenWidth,
          justifyContent:'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, padding: 15, color: 'white', textAlign: 'center'}}>Screen 3</Text>
        </View>
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
