import {Pressable} from '@react-native-material/core';
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {logine, reset} from '../../store/auth.slice';
import {useNavigation} from '@react-navigation/native';

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
    borderRadius: 5,
    width: '75%',
    height: 45,
    borderColor: '#1177BB',
  },
  submitButton: {
    backgroundColor: '#1177BB',
    width: '82%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    padding: 12,
    marginTop: 25,
    height: 50,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
  },
});

function Inputs({navigation, role}) {
  const dispatch = useDispatch ();
  const navig = useNavigation ();

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const {user, token, isLoading, isError, isSuccess, message} = useSelector (
    state => state.auth
  );

  useEffect (
    () => {
      if (isError) {
        console.log ('error');
      }

      if (isSuccess) {
        if (user.result.type === 'ADMIN') {
          navig.navigate ('Admin');
        }
        if (user.result.type === 'ETUDIANT') {
          navig.navigate ('Etudiant');
        }
      }
  
      dispatch (reset ());
    },
    [user, isError, isSuccess, message, navig, dispatch]
  );

  const handleSubmit = () => {
    if (!email || !password) {
      alert ('Donnée manquante');
    } else {
      dispatch (logine ({email, password}));
    }
  };

  // console.log (user);
  // console.log (isLoading);
  // console.log (role);
  // console.log ('sucess :' + isSuccess);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'red',
          borderWidth: 1,
          paddingHorizontal: 5,
          borderColor: 'rgba(118,118,118,.5)',
          borderRadius: 5,
        }}
      >
        <Icon name="person-outline" size={22} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="gray"
          autoCapitalize="none"
          // value={this.props.role}
          onChangeText={tex => setEmail (tex)}
        />

      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'red',
          borderWidth: 1,
          borderColor: 'rgba(118,118,118,.5)',
          paddingHorizontal: 5,
          borderRadius: 5,
          marginTop: 16,
        }}
      >
        <Icon name="lock-closed-outline" size={22} />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="gray"
          autoCapitalize="none"
          onChangeText={tex => setPassword (tex)}
        />
      </View>

      <Pressable
        pressEffectColor="white"
        style={styles.submitButton}
        onPress={() => handleSubmit ()}
      >
        {isLoading ? <><ActivityIndicator color={'white'} size={'large'}/>
        <Text style={styles.submitButtonText}> Connexion... </Text></> :<Text style={styles.submitButtonText}> Se connecter</Text>
          }
      </Pressable>
    </View>
  );
}

export default Inputs;
