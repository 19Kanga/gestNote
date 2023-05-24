import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from '@react-native-material/core';
import {useDispatch, useSelector} from 'react-redux';
import {logout, reset} from '../../store/auth.slice';
import {useNavigation} from '@react-navigation/native';

export default function CustomDrawer (props) {
  const dispatch = useDispatch ();
  const navi = useNavigation ();
  // const {user} = useSelector (state => state.auth);

  const onLogout = () => {
    dispatch (logout ());
    dispatch (reset ());
    navi.navigate ('Acceuil');
  };

  const {user, token, isLoading, isError, isSuccess, message} = useSelector (
    state => state.auth
  );

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'rgb(0, 122, 204)'}}
      >
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={require ('../assets/image/iiac.png')}
            alt=""
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              // marginBottom: 1,
              marginTop: 22,
            }}
          />
          <View style={{padding: 10, marginTop: 22}}>
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontFamily: 'Roboto-Medium',
              }}
            >
              Fotso lionels
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: 'Roboto-Medium',
              }}
            >
              CS2I DWM
            </Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 11}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 11, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        {/* <Text
          style={{color: '#333', fontSize: 15, fontFamily: 'Roboto-Medium'}}
        >
          Yo
        </Text> */}
        <View
          style={{
            // backgroundColor: 'rgb(0, 122, 204)',
            borderRadius: 5,
            overflow: 'hidden',
          }}
        >
          <Pressable
            onPress={onLogout}
            pressEffectColor="rgb(0, 122, 204)"
            style={{
              flexDirection: 'row',
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}
          >
            <Icon name="exit-outline" color="black" size={22} />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: 'Roboto-Medium',
                marginLeft: 11,
                color: 'black',
              }}
            >
              Sign Out
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
