/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
  AccessToken
	} = FBSDK;

const Login = () => (
      <View>
        <LoginButton
          readPermissions={["email","user_friends"]}
          onLoginFinished={
	    (error, result) => {
              if (error) {
		  alert("login has error: " + result.error);
              } else if (result.isCancelled) {
		  alert("login is cancelled.");
              } else {
		  AccessToken.getCurrentAccessToken().then(
		   (data) => {
		       alert(data.accessToken.toString())
		   }
	      )
            }
	  }
      }
      onLogoutFinished={() => alert("logout.")}/>
      </View>
);
	
    

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
