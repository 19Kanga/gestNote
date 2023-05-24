import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from '@react-native-material/core';

export default function ClassItem({navigation, classe, urlClasse}) {
  const navi = useNavigation ();
  return (
    <View>
      <Pressable
        onPress={() => navi.navigate (urlClasse, {classe})}
        style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: 'white',
          marginHorizontal: 10,
          marginBottom: 10,
          elevation: 2,
          shadowColor: 'rgb(118,118,118)',
          // shadowOpacity: 0.2,
        }}
      >
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Image
            source={require ('../../assets/image/20.png')}
            style={{width: 50, height: 50}}
            resizeMode="contain"
          />
          <Text style={{marginLeft: 20, color: 'gray', fontWeight: 600}}>
            {classe.nomClasse}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ccc',
            height: 30,
            width: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginLeft: 90,
          }}
        >
          <Icon name="chevron-right" size={15} />
        </View>
      </Pressable>
    </View>
  );
}
