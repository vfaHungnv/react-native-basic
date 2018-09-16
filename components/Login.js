/* @flow */

import React, { Component } from 'react';
import { View,Text,StyleSheet, TextInput, Keyboard, Alert } from 'react-native';
import Button from 'react-native-button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      note: '',
    };
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      this.setState(() => {
        return {email: 'Keyboard is show'}
      });
    });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      this.setState(() => {
        return {email: 'Keyboard is hide'}
      });
    });
   // console.log('Home Component WILL MOUNT!')
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
   // console.log('Home Component WILL UNMOUNT!')
  }

  componentDidMount() {
   console.log('Home Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
   console.log('Home Component WILL RECIEVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
   return true;
  }

  componentWillUpdate(nextProps, nextState) {
   console.log('Home Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
   console.log('Home Component DID UPDATE!')
  }

  _onPressButton = () => {
    Alert.alert("You pressed the button!")
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.emailTextInput}
          keyboardType='email-address'
          placeholder='Enter your email'
          placehoderTextColor='#c5c5c5'
          // autoFocus={true}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                email: text
              };
            });
          }
        } />
        <Text style={styles.text}>{this.state.email}</Text>
        <TextInput style={styles.passwordTextInput}
          keyboardType='default'
          secureTextEntry={true}
          placeholder='Enter your password'
          placehoderTextColor='#c5c5c5'
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                password: text
              };
            });
          }
        } />
        <Text style={styles.text}>{this.state.password}</Text>
        <TextInput style={styles.noteTextInput}
          keyboardType='default'
          multiline={true}
          placeholder='Please input note'
          placehoderTextColor='#c5c5c5'
          borderLeftWidth={3}
          borderBottomWidth={3}
          borderColor='green'
          editable={true}
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                note: text
              };
            });
          }
        } />
        <Text style={styles.text}>{this.state.note}</Text>
        {/* <View style={styles.buttonView}>
          <Button onPress={this._onPressButton}
          title="This is a button"
          color="green"
          ></Button>
        </View> */}
        <Button style={styles.btnLogin}
          onPress={this._onPressButton}
        >Login</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emailTextInput: {
    height: 40,
    marginTop: 30,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 5,
  },
  text: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  passwordTextInput: {
    height: 40,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 5,
  },
  noteTextInput: {
    height: 100,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 5,
  },
  buttonView: {
    marginHorizontal: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c5c5c5',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  btnLogin: {
    marginLeft: 200,
    marginRight: 20,
    alignItems:'center',
    paddingVertical: 13,
    fontSize: 16,
    color: 'white',
    backgroundColor: '#c5c5c5',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    shadowRadius: 5,
    shadowOpacity: 0.3,
  }
});
