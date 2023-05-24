import {View, Text, Image, StyleSheet, ScrollView, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar} from 'react-native-screens';
import {
  Box,
  Pressable,
  // TextInput,
  Wrap,
} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import ClasseNotes from './classeNotes';
import {getClasseById, getClasses, reset} from '../../../store/classe.slice';
import {useDispatch, useSelector} from 'react-redux';
import {getNoteByClassId} from '../../../store/note.slice';
import {Divider} from '@react-native-material/core';
// import {Card} from '@rneui/themed';

export default function NotesClasses({navigation, route}) {
  const {ClasseId, isLoading, isError, message} = useSelector (
    state => state.classe
  );
  const {NoteClasses} = useSelector (state => state.note);

  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (isError) {
        console.log (message);
      }

      // if (!user) {
      //   navigate ('/login');
      // }

      dispatch (getClasseById (route.params.id));
      dispatch (getNoteByClassId (route.params.id));

      return () => {
        dispatch (reset ());
      };
    },
    [navigation, isError, message, dispatch]
  );

  const section = {
    t1: 'N°',
    t2: 'Nom',
    t3: 'Moy',
    t4: 'Credit',
    t5: <Icon name="ellipsis-vertical" size={20} />,
  };

  const [modalVisible, setModalVisible] = useState (false);
  const [semestre, setSemestre] = useState ('SEMESTRE1');
  const [examens, setExamens] = useState ('CC1');
  const [sel, setSel] = useState ('');

  const toggleModal = visible => {
    // console.log (visible);
    setSel (visible);
    setModalVisible (true);
  };
  console.log (sel);

  const textInpute = nom => {
    return (
      <View>
        <Pressable
          onPress={() => {
            toggleModal (nom);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 5,
            shadowColor: 'black',
            height: 50,
            borderRadius: 5,
            marginBottom: 11,
            marginHorizontal: 10,
          }}
        >
          <View
            style={{
              backgroundColor: 'transparent',
              width: '90%',
              padding: 10,
            }}
          >
            <Text>{nom === 'sem' ? semestre : examens}</Text>
          </View>
          <Icon name="md-caret-down" size={22} />
        </Pressable>
      </View>
    );
  };

  const changeSemestreExam = (titre, libel) => {
    if (titre === 'sem') {
      setModalVisible (false);
      return setSemestre (libel);
    } else {
      setModalVisible (false);
      return setExamens (libel);
    }
  };

  const valide = NoteClasses.filter (
    not =>
      not.typeNote === examens &&
      not.typeSemestre === semestre &&
      not.moyenne >= 12
  );
  const echec = NoteClasses.filter (
    not =>
      not.typeNote === examens &&
      not.typeSemestre === semestre &&
      not.moyenne < 12
  );

  const notez = NoteClasses.filter (
    not => not.typeNote === examens && not.typeSemestre === semestre
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6F7'}}>
      {/* {Classe.} */}
      <View
        style={{
          height: 125,
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
          // defaultSource={require (ClasseId.photo)}
          source={require ('../../assets/image/iiac.png')}
          alt=""
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            marginTop: 45,
            shadowColor: 'black',
          }}
        />
        <View style={{paddingHorizontal: 10, marginTop: 52}}>
          <Text
            style={{color: 'white', fontFamily: 'Roboto-Black', marginLeft: 4}}
          >
            Classe : {ClasseId.nomClasse}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Text style={styles.text}>
              Total : &nbsp;
              <Text style={{color: 'white'}}>
                {notez.length}
              </Text>
            </Text>
            <Text style={styles.text}>
              Admis : &nbsp;<Text style={{color: 'greenyellow'}}>
                {valide.length}
              </Text>
            </Text>
            <Text style={styles.text}>
              Echec : &nbsp;
              <Text style={{color: 'tomato'}}>{echec.length}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 15, marginBottom: 8}} />
      {textInpute ('sem')}
      {textInpute ('exam')}
      <View>
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1177BB',
            marginHorizontal: 5,
            paddingVertical: 7,
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

        <View style={{height: '72.5%'}}>
          <ScrollView
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-around'
              marginHorizontal: 5,
              // elevation: 15,
              // shadowColor: 'rgba(118,118,118,.6)',
              // paddingVertical: 2,
              backgroundColor: 'white',
              paddingBottom: 100,
            }}
          >

            {notez.map ((dat, index) => (
              <ClasseNotes key={index} notes={dat} long={1} url="Voir" />
            ))}
          </ScrollView>
        </View>
      </View>
      <View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible (!modalVisible);
          }}
          style={{Color: 'green'}}
        >
          <Box style={{flex: 1, backgroundColor: 'rgba(0,0,0,.25)'}}>
            <View
              style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'white',
                height: sel !== 'sem' ? '30%' : '19%',
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
              }}
            >
              <View style={{position: 'relative', marginVertical: 10}}>
                <Text style={styles.text1}>
                  {sel === 'sem'
                    ? 'Selectionez votre semestre'
                    : "Selectionez votre type d'examen"}
                </Text>
              </View>
              <Divider
                color="rgba(118,118,118,.2)"
                style={{marginHorizontal: 25}}
              />
              {sel !== 'sem'
                ? <View>
                    <Pressable
                      onPress={() => changeSemestreExam (sel, 'CC1')}
                      style={styles.pressable}
                    >
                      <Text style={styles.textPres}>
                        Contrôle continue N° 1
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => changeSemestreExam (sel, 'CC2')}
                      style={styles.pressable}
                    >
                      <Text style={styles.textPres}>
                        Contrôle continue N° 2
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() =>
                        changeSemestreExam (sel, 'SESSION NORMALE')}
                      style={styles.pressable}
                    >
                      <Text style={styles.textPres}>Session normale</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => changeSemestreExam (sel, 'RATRAPPAGE')}
                      style={styles.pressable}
                    >
                      <Text style={styles.textPres}> Examen de rattrapage</Text>
                    </Pressable>
                  </View>
                : <View>
                    <Pressable
                      onPress={() => changeSemestreExam (sel, 'SEMESTRE1')}
                      style={styles.pressable}
                    >
                      <Text style={styles.textPres}>Semestre N°1</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => changeSemestreExam (sel, 'SEMESTRE2')}
                      style={styles.pressable}
                    >
                      <Text style={styles.textPres}>Semestre N°2</Text>
                    </Pressable>
                  </View>}
            </View>
          </Box>
        </Modal>
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
  // modal: {
  //   width: '100%',
  //   position: 'absolute',
  //   bottom: 0,
  //   backgroundColor: 'white',
  //   height: '30%',
  //   borderTopStartRadius: 40,
  //   borderTopEndRadius: 40,
  // },
  text1: {
    // color: 'rgb(0, 122, 204)',
    color: 'rgba(0,0,0,.65)',
    fontSize: 18,
    fontWeight: '600',
    // marginTop: 10,
    textAlign: 'center',
  },
  pressable: {
    padding: 11,
  },
  textPres: {
    color: 'rgb(0, 122, 204)',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '400',
  },
});
