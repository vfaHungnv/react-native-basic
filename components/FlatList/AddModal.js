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
import flatListData from '../../data/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFoodName: '',
      newFoodDescription: '',
    };
  }

  showAddModal = () => {
    this.refs.myModal.open();
  }

  generateKey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters});
  }

  _onPressSave = () => {
    if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
      Alert.alert(
        'Alert',
        "You must enter food's name and description.",
        [
          {text: 'OK', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
        ],
        { cancelable: true }
      );
      return;
    }
    {/* Add new food */}
    const newKey = this.generateKey(24);
    const newFood = {
      key: newKey,
      name: this.state.newFoodName,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Cornish_cream_tea_2.jpg",
      foodDescription: this.state.newFoodDescription
    };
    flatListData.push(newFood);
    this.props.parentFlatList.refreshFlatList(newKey);
    this.refs.myModal.close();
  }

  render() {
    return (
      <Modal
        ref={'myModal'}
        style={styles.container}
        position='center'
        backdrop={true}
        onClosed={() => {
          // alert('Modal close');
        }}>
        <Text style={styles.title}>New food's information</Text>
        <TextInput style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              newFoodName: text
            });
          }}
          placeholder="Enter new food's name"
          value={this.state.newFoodName}
        />
        <TextInput style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              newFoodDescription: text
            });
          }}
          placeholder="Enter new food's description"
          value={this.state.newFoodDescription}
        />
        <Button style={styles.btnSave}
          containerStyle={{
            padding: 8,
            marginHorizontal: 70,
            height: 40,
            borderRadius: 6,
            backgroundColor: 'mediumseagreen',
          }}
          onPress={this._onPressSave}
        >Login</Button>
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
    height: 250,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  btnSave: {
    fontSize: 18,
    color: 'white',
  },
});
