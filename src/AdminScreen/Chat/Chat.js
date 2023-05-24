//import liraries
import {Avatar} from '@react-native-material/core';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const Chat = () => {
  return (
    <View style={styles.container}>
      <View>
        <Avatar src="" alt="">
          <Icon name="person" size={24} color="white" style={{zIndex: 100}} />
        </Avatar>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'greenyellow',
  },
});
0;

//make this component available to the app
export default Chat;
