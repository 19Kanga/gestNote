import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ClassItem from './ClassItem';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

// import Examens from './Examens';

const classe = [
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
  {
    image: require ('../../assets/image/iiac.png'),
    nomClasse: 'CS2I 3 DWM',
    urlClasse: 'List',
    parametre: 'CS2I 3 DWM',
  },
];

export default function Notes({navigation}) {
  const [visible, setVisible] = useState (false);

  const filterBtn = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            setVisible (true);
          }}
        >
          <View
            style={{
              // backgroundColor: '#ccc',
              width: 40,
              height: 40,
              marginRight: 5,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}
          >
            <Icon name="search" size={23} color="#1177BB" />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View
            style={{
              // backgroundColor: '#ccc',
              width: 40,
              height: 40,
              marginRight: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}
          >
            <Icon name="ios-filter" size={24} color="#1177BB" />
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  useEffect (
    () => {
      navigation.setOptions ({
        headerRight: filterBtn,
      });
    },
    [navigation]
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6F7'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: 'white',
          elevation: 10,
          shadowColor: 'rgba(0, 122, 204,0.6)',
          margin: 15,
          borderRadius: 10,
          overflow: 'hidden',
          // backfaceVisibility: 'hidden',
          // display: !route.params.name ? 'none' : 'flex',
          display: visible ? 'flex' : 'none',
          // visible ? '': display:'none',
        }}
      >
        <TextInput
          placeholder="Rechercher votre salle de classe"
          placeholderTextColor="rgba(0, 122, 204,0.4)"
          style={{
            // backgroundColor: 'red',
            padding: 7,
            width: '87%',
          }}
        />
        <View
          style={{
            // backgroundColor: 'yellow',
            width: '13%',
            // height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="search" size={18} />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 10,
            marginHorizontal: 10,
            fontSize: 16,
          }}
        >
          Classes
        </Text>
      </View>
      <ScrollView>
        <View>
          {classe.map ((cls, index) => {
            return <ClassItem key={index} classe={cls} />;
          })}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
