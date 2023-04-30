import {ActivityIndicator} from '@react-native-material/core';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    marginTop: 25,
    padding: 10,
    borderRadius: 5,
    width: '75%',
    height: 45,
    borderColor: 'blue',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '75%',
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

class Inputs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loading: false,
    };
  }

  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState ({email: text});
  };
  handlePassword = text => {
    this.setState ({password: text});
  };
  login = (email, pass) => {
    alert ('email: ' + email + ' password: ' + pass);

    if (email == 'admin') {
      this.props.navigation.navigate ('Admin');
      // this.setState ((loading = true));
    }
    if (email == 'etude') {
      this.props.navigation.navigate ('Etudiant');
      // this.setState ((loading = true));
    }
  };
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          value={this.props.role}
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login (this.props.role, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Se connecter </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Inputs;
