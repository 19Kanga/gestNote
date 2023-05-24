import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';

export default function Menu({list, navigation}) {
  const {iconName, title, url} = list;
  const navig = useNavigation ();

  return (
    <View
      style={{
        // borderRadius: 10,
        overflow: 'hidden',
        margin: 2,
      }}
    >
      <Pressable
        onPress={() => navig.navigate (url)}
        pressEffectColor="rgba(0, 122, 204,0.03)"
        style={{
          width: 160,
          height: 127,
          // padding: 10,
          // borderWidth: 1,
          // borderColor: 'gray',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          margin: 4,
          elevation: 11,
          shadowColor: '#ccc',
          overflow: 'hidden',
          // shadowOffset: {
          //   width: 5,
          //   height: -10,
          // },
          // shadowOpacity: 0.1,
          // shadowRadius: 3,
        }}
      >
        <Icon name={iconName} size={60} style={{color: '#1177BB'}} />
        <Text style={{color: '#1177BB', fontWeight: 'bold'}}>{title}</Text>
      </Pressable>
    </View>
  );
}
