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

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      foodDescription: '',
    };
  }

  showEditModal = (editingFood, flatlistItem) => {
    // console.log(`editingFood = ${JSON.stringify(editingFood)}`);
    this.setState({
      key: editingFood.key,
      foodName: editingFood.name,
      foodDescription: editingFood.foodDescription,
      flatlistItem: flatlistItem
    });
    this.refs.myModal.open();
  }

  generateKey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters});
  }

  _onPressSave = () => {
    if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
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
    {/* Update food */}
    var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
    if (foundIndex < 0) {
      return;
    }
    flatListData[foundIndex].name = this.state.foodName;
    flatListData[foundIndex].foodDescription = this.state.foodDescription;
    this.state.flatlistItem.refreshFlatListItem();
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
        <Text style={styles.title}>food's information</Text>
        <TextInput style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              foodName: text
            });
          }}
          placeholder="Enter food's name"
          value={this.state.foodName}
        />
        <TextInput style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              foodDescription: text
            });
          }}
          placeholder="Enter food's description"
          value={this.state.foodDescription}
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
