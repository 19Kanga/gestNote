import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button} from '@react-native-material/core';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Layout1({navigation}) {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // marginHorizontal: 10,
          padding: 8,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontFamily: 'Yatra-One',
            color: '#333',
            fontWeight: 600,
          }}
        >
          Bienvenue Fotso
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer ()}>
          <Image
            source={require ('../../assets/image/iiac.png')}
            alt=""
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              objectFit: 'cover',
            }}
          />
        </TouchableOpacity>
      </View>

      {/* <View>
        <Button
          title="open drawer"
          onPress={() => {
            navigation.openDrawer ();
          }}
        />
      </View> */}
    </SafeAreaView>
  );
}
