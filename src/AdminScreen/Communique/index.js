import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Button, Pressable} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create ({
  container: {
    // flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // backgroundColor: 'yellow',
  },
  input: {
    // marginTop: 25,
    padding: 10,
    width: '90%',
    borderRadius: 5,
    // marginHorizontal: 10, // width: '75%',
    height: 45,
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  input1: {
    marginTop: 25,
    padding: 10,
    // borderRadius: 5,
    marginHorizontal: 10, // width: '75%',
    height: 150,
    // borderColor: 'blue',
    // borderWidth: 1,
    textAlignVertical: 'top',
    backgroundColor: 'rgba(0, 122, 204, 0.05)',
    elevation: 1,
    shadowColor: 'black',
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 12,
    marginTop: 25,
    // height: 50,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
  },
  communique: {
    height: 100,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: 'steelblue',
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 7,
    elevation: 5,
    shadowColor: 'steelblue',
  },
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 3,
    color: 'gray',
  },
});

export default function Communique({navigation}) {
  const d = new Date ();
  const textIcon = (txt, nbr) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // width: '100%',
          // backgroundColor: 'yellow',
          marginHorizontal: 10,
          backgroundColor: 'rgba(0, 122, 204, 0.05)',
          elevation: 1,
          shadowColor: 'black',
          marginVertical: nbr,
        }}
      >
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={txt}
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          // value={this.props.role}
          // onChangeText={this.handleEmail}
        />
        <Icon name="ios-caret-down" color="gray" size={22} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'steelblue',
          position: 'absolute',
          bottom: 50,
          right: 23,
          borderRadius: 50,
          overflow: 'hidden',
          zIndex: 100,
          // flex: 1,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate ('News')}
          style={{
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="md-add" size={40} color="white" />
        </Pressable>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 19,
            fontFamily: 'monospace',
            fontWeight: '700',
            marginVertical: 14,
          }}
        >
          Liste Communiquée envoyé
        </Text>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '92.5%', backgroundColor: '#F5F6F7'}}
        >
          <View style={{paddingVertical: 5}}>
            <View style={styles.communique} />
            <Text style={styles.date}>{d.toLocaleDateString ()}</Text>
            <View style={styles.communique} />
            <View style={styles.communique} />
            <View style={styles.communique} />
            <Text style={styles.date}>{d.toLocaleDateString ()}</Text>
            <View style={styles.communique} />
            <View style={styles.communique} />
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}
