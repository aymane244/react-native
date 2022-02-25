import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:5,
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:"black",
  },
});