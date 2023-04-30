import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function ClassItem({navigation, classe}) {
  const navi = useNavigation ();
  return (
    <TouchableOpacity onPress={() => navi.navigate ('NotesClasses')}>
      <View
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
          elevation: 10,
          shadowColor: 'rgba(118,118,118,0.3)',
          // shadowOpacity: 0.2,
        }}
      >
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Image source={classe.image} style={{width: 50, height: 50}} />
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
      </View>
    </TouchableOpacity>
  );
}
