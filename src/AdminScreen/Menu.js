import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Menu({list, navigation}) {
  const {iconName, title, url} = list;
  return (
    <TouchableOpacity onPress={() => navigation.navigate (url)}>
      <View
        style={{
          width: 160,
          height: 120,
          // padding: 10,
          // borderWidth: 1,
          // borderColor: 'gray',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          margin: 4,
          // elevation: 2,
          shadowColor: '#ccc',
          shadowOffset: {
            width: 5,
            height: -10,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        }}
      >
        <Icon name={iconName} size={60} style={{color: '#1177BB'}} />
        <Text style={{color: '#1177BB', fontWeight: 'bold'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
