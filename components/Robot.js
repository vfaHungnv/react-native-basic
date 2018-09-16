/* @flow */

import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Robot extends Component {
  render() {
      const imgURL = {
            uri: 'https://vignette.wikia.nocookie.net/robotics/images/6/60/NAO.jpg/revision/latest?cb=20140311201449'
      };
    return (
      <View style={styles.container}>
        <Text>I'm the Robot component</Text>
        <Image
          style={ {width: 300, height: 300} }
          source={ imgURL }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
