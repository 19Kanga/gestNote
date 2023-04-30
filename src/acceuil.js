import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const logo = require ('./assets/image/iiac.png');
const Acceuil = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image source={logo} alt="yoo" style={styles.logo} />
        </View>
        <View style={styles.view2}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate ('Login', {role: 'etude'})}
          >
            <Text style={styles.text}>Je suis Etudiant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate ('Login', {role: 'parent'})}
          >
            <Text style={styles.text}>Je suis Parent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate ('Login', {role: 'admin'})}
          >
            <Text style={styles.text}>Je suis Administrateur</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    // backgroundColor: 'red',
  },
  view2: {
    flex: 1,
    alignItems: 'center',
  },
  contentImage: {
    height: '60%',
    // backgroundColor: 'green',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 120,
  },
  btn: {
    width: '80%',
    marginVertical: 5,
    marginHorizontal: 'auto',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Acceuil;
