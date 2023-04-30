// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Inputs from './input';

const logo = require ('../assets/image/iiac.png');

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    // margin: 'auto',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    // width: 100,
    // height: 100,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',

    marginTop: 200,
  },
  login: {
    // flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  texte: {
    color: 'blue',
    fontSize: 45,
    fontWeight: '600',
    alignSelf: 'center',
    // marginBottom: 25,
  },
  too: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default function Login({navigation, route}) {
  // {
  //   route.params.role;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} alt="yooo" style={styles.logo} />
      <View style={styles.login}>
        {/* <Text style={styles.texte}>Connexion</Text> */}
        <Inputs navigation={navigation} role={route.params.role} />
      </View>
      <Text style={styles.too}>Copyright &copy; 2023</Text>
    </SafeAreaView>
  );
}
