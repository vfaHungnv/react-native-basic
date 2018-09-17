/* @flow */

import React, { Component } from 'react';
import { View,Text,StyleSheet, TextInput, Keyboard, Alert, Button } from 'react-native';

export default class AddPostStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayNote: '',
      tomorrowNote: '',
    };
  }
  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
    });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
    });
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _onPressPost = () => {
    Alert.alert("You pressed the button!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>〇〇を○時間〇〇分勉強しました !</Text>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>今日の勉強内容</Text>
        </View>
        <TextInput style={styles.inputText}
          keyboardType='default'
          multiline={true}
          placeholder='例)ターゲット 1900 ◯◯ページ\n  スクランブル英文法・語法 ◯◯ページ\n  キムタツの東大英語リスニング ◯◯ページ'
          placehoderTextColor='#D6D6D2'
          borderColor='white'
          // borderColor='green'
          editable={true}
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                todayNote: text
              };
            });
          }
        } />
        <Text style={styles.subText}>※記録するとマイページとアラウンドへ投稿されます</Text>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>明日の勉強予定</Text>
        </View>
        <TextInput style={styles.inputText}
          keyboardType='default'
          multiline={true}
          placeholder='例)古文単語ゴロゴ  ◯◯ページ\n  入試現代文へのアクセス 発展編 ◯◯ページ\n  スピードマスター世界史問題集 ◯◯ページ'
          placehoderTextColor='#D6D6D2'
          borderColor='white'
          // borderColor='green'
          editable={true}
          returnKeyType='done'
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                tomorrowNote: text
              };
            });
          }
        } />
        <Text style={styles.subText}>※記録すると次の日にアラームが表示されます</Text>
        <View style={styles.btnPost}>
          <Button onPress={this._onPressPost}
          title="記録する"
          color="#384B7B"

          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: '#2D6698',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginHorizontal: 10,
  },
  headerView: {
    backgroundColor: '#E8E7E3',
    marginTop: 15,
  },
  headerText: {
    fontSize: 16,
    color: '#3E4C58',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  inputText: {
    height: 130,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
  subText: {
    fontSize: 12,
    marginHorizontal: 20,
    marginTop: 10,
    color: '#3E4C58',
  },
  btnPost: {
    height: 40,
    marginVertical: 20,
    marginHorizontal: 120,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#384B7B',
    borderRadius: 5,
  },
});
