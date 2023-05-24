import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Box, Wrap} from '@react-native-material/core';
import {useSelector, useDispatch} from 'react-redux';
import {getDetailNoteById, reset} from '../../../store/detailNote.slice';

export default function VoirNote({navigation, route}) {
  const note = route.params.notes;

  const semT = note.typeSemestre;
  const d = new Date ();
  const {detailNote, isLoading, isError, message} = useSelector (
    state => state.detailenote
  );

  const dispatch = useDispatch ();
  useEffect (
    () => {
      navigation.setOptions ({
        // title: route.params.notes.nom,
        title: semT + ' 2022/2023',
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
    [navigation, semT, dispatch, isError, note]
  );

  const Avgg = txt => {
    if (txt < 8) {
      return 'Mediocre';
    }
    if (txt <= 8 || txt < 11) {
      return 'Passable';
    }
    if ((txt = 11 || txt < 14)) {
      return 'Asez bien';
    }
    if ((txt = 14 || txt < 16)) {
      return 'Bien';
    }
    if ((txt = 16 || txt < 20)) {
      return 'Excellent';
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: 135,
          backgroundColor: '#1177BB',
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
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
        <View style={{marginTop: 45}}>
          <Text
            style={{
              color: 'white',
              // fontFamily: 'Roboto-Black',
              fontFamily: 'RobotoSlab-Medium',
              fontSize: 15,
              marginLeft: 4,
              // fontSize: 16,
            }}
          >
            {note.user.firstname + ' ' + note.user.lastname}
          </Text>
          <Text
            style={{
              color: 'white',
              // fontFamily: 'Roboto-Black',
              fontFamily: 'RobotoSlab-Medium',
              fontSize: 15,
              marginLeft: 4,
              // fontSize: 16,
            }}
          >
            Examen : &nbsp;{note.typeNote}
          </Text>

          <Text style={styles.text}>
            Moyenne :&nbsp;
            <Text style={{color: 'whitesmoke'}}>
              {note.moyenne} / 20
            </Text>
          </Text>

        </View>
      </View>
      <View>
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1177BB',
            marginHorizontal: 5,
            paddingVertical: 7,
            marginTop: 15,
            // marginTop: 25,
          }}
        >
          <Wrap>
            <Box
              w={'55%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>Matiéres</Text>
            </Box>
            <Box
              w={'20%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>Note /20</Text>
            </Box>
            <Box
              w={'25%'}
              h={30}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.sectionHeader}>Avg</Text>
            </Box>
          </Wrap>
        </View>
        <ScrollView style={{height: '74.8%', marginHorizontal: 5}}>
          <View
            style={{
              // flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#1177BB',

              backgroundColor: 'white',
              // paddingVertical: 7,
              // marginTop: 15,
              // marginTop: 25,
            }}
          >
            {detailNote.map ((det, index) => (
              <Wrap
                key={index}
                style={{borderTopWidth: 1, borderColor: 'rgba(118,118,118,.3)'}}
              >
                <Box
                  w={'55%'}
                  h={30}
                  style={{
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 15,
                      fontFamily: 'RobotoSlab-Medium',
                      fontSize: 13,
                      color: 'gray',
                    }}
                  >
                    {det.matiere}
                  </Text>
                </Box>
                <Box
                  w={'20%'}
                  h={40}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderColor: 'rgba(118,118,118,.3)',
                  }}
                >
                  <Text style={styles.text1}>{det.notes}</Text>
                </Box>
                <Box
                  w={'25%'}
                  h={30}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.text1}>{Avgg (det.notes)}</Text>
                </Box>
              </Wrap>
            ))}
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  text: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 14,
    color: 'white',
    marginHorizontal: 6,
    // lineHeight: 1.1,
  },
  text1: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 13,
    color: 'gray',
    // lineHeight: 1.1,
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
  sectionHeader1: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    color: 'black',
    transform: [{rotate: '0deg'}],
    flexWrap: 'nowrap',
    textAlign: 'center',
  },
  sectionHeader2: {
    // fontFamily: 'RobotoSlab-Medium',
    // fontSize: 15,
    // color: 'black',
    // transform: [{rotate: '0deg'}],
    flexWrap: 'nowrap',
    textAlign: 'center',
  },
});
