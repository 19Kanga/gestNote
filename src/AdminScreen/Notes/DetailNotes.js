import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NotesMatiere from './NotesMatiere';
import {Pressable} from '@react-native-material/core';
import {useDispatch, useSelector} from 'react-redux';
import {getDetailNoteById, reset} from '../../../store/detailNote.slice';

export default function DetailNotes({navigation, route}) {
  const note = route.params.notes;

  const {detailNote, isLoading, isError, message} = useSelector (
    state => state.detailenote
  );

  const dispatch = useDispatch ();
  useEffect (
    () => {
      navigation.setOptions ({
        title: 'Ratrappage',
      });

      if (isError) {
        console.log (message);
      }

      // if (!user) {
      //   navigate ('/login');
      // }

      dispatch (getDetailNoteById (note.id));

      return () => {
        dispatch (reset ());
      };
    },
    [navigation, dispatch, isError, note]
  );

  // const matieres = detailNote.filter (
  //   not => not.typeNote == 'CC1' && not.typeSemestre == 'SEMESTRE1'
  // );

  return (
    <SafeAreaView>
      <View
        style={{
          height: 135,
          backgroundColor: '#1177BB',
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 19,
          elevation: 15,
          shadowColor: 'black',
          position: 'relative',
        }}
      >
        {/* <View style={{position: 'absolute', top: 5, left: 7}}>
        
        </View> */}
        <Image
          source={require ('../../assets/image/iiac.png')}
          alt=""
          style={{
            width: 70,
            height: 70,
            // borderRadius: 50,
            marginTop: 45,
            shadowColor: 'black',
          }}
        />
        <View style={{paddingHorizontal: 10, marginTop: 45}}>

          <Text style={styles.text}>
            {note.user.firstname + ' ' + note.user.lastname}
            {/* </Text> */}
          </Text>
          <Text style={[styles.text, {marginVertical: 1}]}>
            Examen : {note.typeNote}
          </Text>
          {/* <View style={{flexDirection: 'row', marginTop: 8}}> */}
          <Text style={styles.text}>
            Moyenne :
            <Text style={{color: 'white'}}>{note.moyenne}</Text>
          </Text>

        </View>
      </View>
      <ScrollView style={{height: '80%'}}>
        <View>

          <Text
            style={{
              margin: 10,
              fontSize: 16,
              fontWeight: '700',
              textAlign: 'center',
            }}
          >
            Ajouter une nouvelle note de ratrappage
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#1177BB',
              borderRadius: 7,
              padding: 7,
              // marginTop: 15,
            }}
          >
            {detailNote.map ((mapi, index) => (
              <NotesMatiere key={index} mati={mapi} />
            ))}
          </View>

        </View>
        <View
          style={{
            height: 45,
            width: '95%',
            backgroundColor: '#1177BB',
            alignSelf: 'center',
            marginVertical: 13,
            borderRadius: 7,
            overflow: 'hidden',
          }}
        >
          <Pressable
            pressEffectColor="white"
            style={{
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{color: 'white', fontWeight: '500', fontSize: 16}}>
              Submit
            </Text>
          </Pressable>
        </View>
      </ScrollView>

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
  // item1: {
  //   // paddingVertical: 5,
  //   width: 45,
  //   // height: 30,
  //   borderWidth: 1,
  //   padding: 5,
  //   marginVertical: 3,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  // },
  sectionHeader: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    color: 'white',
  },
});
