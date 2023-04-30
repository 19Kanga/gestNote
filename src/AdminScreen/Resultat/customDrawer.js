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

export default function CustomDrawer (props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#1177BB'}}
      >
        <View
          // source={require ('../../assets/image/20.png')}
          style={{
            margin: 0,
            padding: 20,
            backgroundColor: '#1177BB',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={require ('../../assets/image/iiac.png')}
            alt=""
            style={{
              width: 70,
              height: 70,
              borderRadius: 40,
              marginBottom: 11,
              // padding: 5,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
              }}
            >
              Fotso lionels
            </Text>
            <Text style={{color: 'white', fontSize: 12}}>CS2I 3 DWM</Text>

          </View>

        </View>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        {/* <Text
          style={{color: '#333', fontSize: 15, fontFamily: 'Roboto-Medium'}}
        >
          Yo
        </Text> */}
        <TouchableOpacity style={{flexDirection: 'row', paddingVertical: 5}}>
          <Icon name="exit-outline" color="#333" size={22} />
          <Text
            style={{
              color: '#333',
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 6,
            }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
