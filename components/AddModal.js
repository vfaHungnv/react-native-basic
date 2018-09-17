/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  Platform,
  TouchableHighlight,
  Dimensions,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);
  }

  showAddModal = () => {
    this.refs.myModal.open();
  }

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.container}
        position='center'
        backdrop={true}
        onClosed={() => {
          alert('Modal close');
        }}>
        <Text style={styles.title}>New food's information</Text>
        <TextInput style={styles.textInput}
          placeholder="Enter new food's name"
        ></TextInput>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 0,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
});
