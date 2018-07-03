import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import Profile from './src/components/Profile.js';

const App = () => (
  <View>
    <Header headerText={'Dominique Cunningham'} />
    <Profile />
  </View>
);

AppRegistry.registerComponent('udemyrnr', () => App);
