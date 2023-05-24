//import liraries
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button, Pressable} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const AddCommunique = () => {
  const textIcon = (txt, nbr) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // width: '100%',
          // backgroundColor: 'yellow',
          borderColor: 'steelblue',
          borderWidth: 1,
          marginHorizontal: 10,
          backgroundColor: 'white',
          //   elevation: 7,
          //   shadowColor: 'steelblue',
          marginVertical: nbr,
        }}
      >
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={txt}
          placeholderTextColor="gray"
          autoCapitalize="none"
          // value={this.props.role}
          // onChangeText={this.handleEmail}
        />
        <Icon name="ios-caret-down" color="gray" size={22} />
      </View>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', margin: 15}}>
        <Image source={require ('../../assets/image/iiac.png')} />
      </View>
      <View style={{marginHorizontal: 30}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '600',
            marginTop: 9,
            fontSize: 15,
          }}
        >
          Bienvenue dans la rubrique  Communiquez
        </Text>
        <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 15}}>
          Il s'agit ici de faire des annonces à toutes les étudiants d'une classe que l'on precisera
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>

        {textIcon ('selectioner la classe correspondante', 25)}
        {textIcon ('Object', 0)}
        <TextInput
          style={styles.input1}
          // secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Message"
          placeholderTextColor="gray"
          autoCapitalize="none"
          role="combobox"

          // onChangeText={this.handlePassword}
        />

        <View
          style={{
            backgroundColor: '#1177BB',
            height: 50,
            marginHorizontal: 35,
            marginVertical: 30,
            borderRadius: 50,
            overflow: 'hidden',
          }}
        >
          <Pressable pressEffect="ripple">
            <Text
              style={{
                height: 50,
                textAlign: 'center',
                textAlignVertical: 'center',
                color: 'white',
                fontSize: 15,
              }}
            >
              Publiez
            </Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
};

// define your styles
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
    borderColor: 'steelblue',
    borderWidth: 1,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    // elevation: 5,
    // shadowColor: 'steelblue',
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
});

//make this component available to the app
export default AddCommunique;
