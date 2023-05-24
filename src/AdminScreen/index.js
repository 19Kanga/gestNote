//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import Resul from './Carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import Menu from './Menu';
import {ScrollView} from 'react-native-gesture-handler';
import {Pressable} from '@react-native-material/core';
import {logout, reset} from '../../store/auth.slice';
import {useDispatch, useSelector} from 'react-redux';

const datas = [
  {
    iconName: 'ios-newspaper-outline',
    title: 'Resultat',
    url: 'Resultat',
  },
  {
    iconName: 'file-tray-full-outline',
    title: 'Gerer les Notes',
    url: 'Rattrapages',
  },
  // {
  //   iconName: 'calendar-outline',
  //   title: 'Ascence / Presence',
  //   url: 'Presence',
  // },
  {
    iconName: 'md-chatbubble-ellipses-outline',
    title: 'Chat',
    url: 'Chat',
  },
  {
    iconName: 'megaphone-outline',
    title: 'Communique',
    url: 'Communique',
  },
  {
    iconName: 'open-outline',
    title: 'Convocations',
    url: 'Convocation',
  },
  {
    iconName: 'settings-outline',
    title: 'Parametre',
    url: 'Parametre',
  },
  // {
  //   iconName: 'exit-outline',
  //   title: 'Logout',
  //   url: 'Resultat',
  // },
];

// create a component
const AdminScreen = ({navigation}) => {
  //   const [etude, setEtude] = useState ([]);

  //   const fetchAPI = async () => {
  //     try {
  //       const res = await axios.get ('http:/192.168.42.74:3003/api/user/');
  //       // console.log (res.data.json ());
  //       setEtude (res.data.users);
  //     } catch (error) {
  //       console.log (error.message);
  //     }
  //   };
  //   useEffect (() => {
  //     fetchAPI ();
  //   }, []);

  // etude.map (et => console.log (et.username));

  const dispatch = useDispatch ();
  // const {user} = useSelector (state => state.auth);

  const onLogout = () => {
    dispatch (logout ());
    dispatch (reset ());
    navigation.navigate ('Acceuil');
  };

  const {user, token, isLoading, isError, isSuccess, message} = useSelector (
    state => state.auth
  );

  return (
    <SafeAreaView style={styles.container}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // marginHorizontal: 10,
          paddingVertical: 10,
          paddingHorizontal: 8,
          paddingBottom: 145,
          backgroundColor: '#1177BB',
          elevation: 5,
          shadowColor: 'blue',
          shadowRadius: 1,
          // zIndex: -10,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'RobotoSlab-SemiBold',
            color: 'gray',
            fontWeight: 600,
            color: 'white',
          }}
        >
          Bienvenue {user.result.lastname}
        </Text>
        <Image
          source={require ('../assets/image/iiac.png')}
          defaultSource={user.result.profile}
          alt=""
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            resizeMode: 'cover',
          }}
        />
      </View>
      <Resul />
      <ScrollView>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >

          {datas.map ((men, index) => {
            return <Menu key={index} list={men} navigation={navigation} />;
          })}

        </View>

      </ScrollView>
      <View>
        <Pressable
          onPress={() => onLogout ()}
          style={{
            backgroundColor: '#1177BB',
            height: 50,
            width: '92%',
            padding: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            zIndex: 1,
            // elevation: 20,
          }}
        >
          <Text style={{color: 'white'}}>Deconnexion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
    backgroundColor: 'red',
  },
});

//make this component available to the app
export default AdminScreen;

{
  /* {etude?.map(etud => {
        return (
          <Resul et={etud} />
          )
      })} */
}
