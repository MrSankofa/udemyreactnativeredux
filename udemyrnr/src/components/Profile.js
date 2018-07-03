import React, { Component } from 'react';
import { View, Text } from 'react-native';

// To do a a HTTP request we need a functional component
// Used to fetch data or use helper components
class Profile extends Component {
  componentWillMount() {
    console.log('componentWillMount in Profile');
  }

  render() {
    return (
      <View>
        <Text> Profile List Coming up! </Text>
      </View>
    );
  }
}

export default Profile;
