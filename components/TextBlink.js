/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        var taskToDo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        };
        const timeToBlink = 1000;
        setInterval(taskToDo, timeToBlink);
    }
    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : ' ';
      return (
          <Text>{ textToDisplay }</Text>
      );
    }
}

export default class TextBlink extends Component {
  render() {
      let text1 = `

          Hello, how are you?
      `
      let text2 = `
          I am fine, thank you!
      `
    return (
      <View>
        <Blink inputText={text1}></Blink>
        <Blink inputText={text2}></Blink>
      </View>
    );
  }
}
