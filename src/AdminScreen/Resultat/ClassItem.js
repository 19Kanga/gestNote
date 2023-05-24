import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from '@react-native-material/core';

export default function ClassItem({navigation, classe}) {
  const navi = useNavigation ();
  //const url = require (classe.photo);
  // console.log (url);
  console.log (classe);
  return (
    <View>
      <Pressable
        onPress={() => navi.push ('NotesClasses', {id: classe.id})}
        style={{
          // borderWidth: 1,
          // borderColor: 'blue',
          // width: '100%',
          // height:50,
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: 'white',
          marginHorizontal: 10,
          marginBottom: 10,
          elevation: 3,
          shadowColor: 'rgb(118,118,118)',
          borderRadius: 10,
          overflow: 'hidden',
          // shadowOpacity: 0.2,
        }}
      >
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Image
            source={require ('../../assets/image/IMG-20230425-WA0002.jpg')}
            style={{width: 50, height: 50}}
            resizeMode="contain"
          />
          <Text style={{marginLeft: 20, color: 'gray', fontWeight: 600}}>
            {classe.nomClasse}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(118,118,118,0.1)',
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
