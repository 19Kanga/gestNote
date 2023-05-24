//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Parametre = () => {
  return (
    <View style={styles.container}>
      <Text>Parametre</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

//make this component available to the app
export default Parametre;
