import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {SearchBar} from 'react-native-screens';
import {
  Box,
  IconButton,
  Pressable,
  TextInput,
  Wrap,
} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import ClasseNotes from '../../AdminScreen/Resultat/classeNotes';
// import ClasseNotes from '../Resultat/classeNotes';
// import ClasseNotes from './classeNotes';
// import {Card} from '@rneui/themed';

export default function Semestre2({noteClasses, classe, exa, ad, ae}) {
  const section = {
    t1: 'N°',
    t2: 'Nom',
    t3: 'Moy',
    t4: 'Credit',
    t5: <Icon name="ellipsis-vertical" size={20} />,
  };

  const data = [
    {
      num: 1,
      nom: 'zaza kamte',
      moyenne: 14.7,
      total: 25,

      color: 'rgba(52, 168, 83,.2)',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6F7'}}>
      <View
        style={{
          height: 150,
          backgroundColor: '#1177BB',
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 19,
          elevation: 15,
          shadowColor: 'black',
          position: 'relative',
        }}
      >
        <View style={{position: 'absolute', top: 5, left: 7}}>
          {/* <Pressable onPress={() => navigation.goBack ()}>
            <Icon name="ios-arrow-back" size={30} color="black" />
          </Pressable> */}
        </View>
        <Image
          source={require ('../../assets/image/iiac.png')}
          alt=""
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            marginTop: 57,
            shadowColor: 'black',
          }}
        />
        <View style={{paddingHorizontal: 10, marginTop: 52}}>
          <Text
            style={{color: 'white', fontFamily: 'Roboto-Black', marginLeft: 4}}
          >
            Classe : {classe.nomClasse}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Text style={styles.text}>
              Total : <Text style={{color: 'white'}}>{noteClasses.length}</Text>
            </Text>
            <Text style={styles.text}>
              Admis : <Text style={{color: 'greenyellow'}}>{ad}</Text>
            </Text>
            <Text style={styles.text}>
              Echec: <Text style={{color: 'tomato'}}>{ae}</Text>
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '800',
          textAlign: 'center',
          marginVertical: 17,
        }}
      >
        LISTE DES NOTES : {exa}
      </Text>
      <View>
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1177BB',
            marginHorizontal: 5,
            paddingVertical: 7,
            // marginTop: 25,
          }}
        >
          <Wrap spacing={1}>
            <Box
              w={'10%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>{section.t1}</Text>
            </Box>
            <Box
              w={'40%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>{section.t2}</Text>
            </Box>
            <Box
              w={'19.3%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>{section.t3}</Text>
            </Box>
            <Box
              w={'15%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>{section.t4}</Text>
            </Box>
            <Box
              w={'14.2%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>{section.t5}</Text>
            </Box>
          </Wrap>
        </View>

        <View style={{height: '80%'}}>
          <ScrollView
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-around'
              marginHorizontal: 5,
              elevation: 15,
              shadowColor: 'rgba(118,118,118,.6)',
              paddingVertical: 2,
              backgroundColor: 'white',
              paddingBottom: 100,
            }}
          >
            {noteClasses.map ((dat, index) => (
              <ClasseNotes key={index} notes={dat} url="Voir" />
            ))}
          </ScrollView>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  text: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    color: 'white',
    marginHorizontal: 6,
  },
  item: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 14,
    color: 'gray',
    padding: 5,
  },
  sectionHeader: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    color: 'white',
  },
});
