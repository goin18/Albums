//Index.ios.js - place code in here for IOS


//Import a library to help create a Component
import React from 'react';
// import ReactNative from 'react-native';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js'

//Create a Component
const App = () => {
  return (
    <View style={{flex:1}}>
      <Header headerText={'Albums!'}/>
      <AlbumList />
    </View>

  );
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
