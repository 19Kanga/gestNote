import {View, Text, Modal, StyleSheet, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ratrapage1 from './ratrapage1';
// import Ratrapage2 from './Ratrapage2';
import Icon from 'react-native-vector-icons/Ionicons';
import Layout1 from './Layout/layout1';
import Semestre2 from './Layout/Semestre2';
import {Box, Divider, Pressable} from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux';
import { getNoteByClassId, reset } from '../../store/note.slice';
import { getClasseById} from '../../store/classe.slice';

const Tab = createBottomTabNavigator ();

// const btns = props => {
//   return <Text><Icon name="person" /></Text>;
// };

export default function Parametre({ navigation }) {
  const { user } = useSelector(state => state.auth);
  const { NoteClasses, isError, message } = useSelector(state => state.note);
  const {ClasseId} = useSelector (
   state => state.classe
  );

  const [modalVisible, setModalVisible] = useState (false);


const dispatch = useDispatch ();
  const toggleModal = visible => {
    setModalVisible (visible);
  };

  useEffect (
    () => {
      navigation.setOptions ({
        headerRight: () => (
          <View
            style={{
              borderRadius: 50,
              overflow: 'hidden',
              marginRight: 12,
              marginTop: 6,
            }}
          >
            <Pressable
               onPress = {() => {toggleModal(true)}}
              style={{ padding: 7 }} pressEffectColor="white">
              <Icon name="md-ellipsis-vertical" size={24} color="white" />
            </Pressable>
          </View>
        ),
      });

      dispatch(getClasseById(user.result.classeId));
      dispatch (getNoteByClassId (user.result.classeId));

      return () => {
        dispatch(reset());
      };
    },
    [navigation,isError, message, dispatch,getClasseById,getNoteByClassId]
  );


  const [examen, setExamen] = useState('CC1');

  const Update = (txt) => {
    setModalVisible(false);
    return setExamen(txt);
  }

  const notez = NoteClasses.filter(not => not.typeNote === examen && not.typeSemestre === 'SEMESTRE1');
  const noteza = NoteClasses.filter (
  not => not.typeNote === examen && not.typeSemestre === 'SEMESTRE1' && not.moyenne >= 12
  );
  const noteze = NoteClasses.filter (
  not =>
    not.typeNote === examen &&
    not.typeSemestre === 'SEMESTRE1' &&
    not.moyenne < 12
);


  const notez2 = NoteClasses.filter (
    not => not.typeNote === examen && not.typeSemestre === 'SEMESTRE2'
  );
  const notea = NoteClasses.filter (
  not =>
    not.typeNote === examen &&
    not.typeSemestre === 'SEMESTRE2' &&
    not.moyenne >= 12
);
const notee = NoteClasses.filter (
  not =>
    not.typeNote === examen &&
    not.typeSemestre === 'SEMESTRE2' &&
    not.moyenne < 12
);



  



const LayoutScreen = (props) => {
    return <Layout1 noteClasses={notez} classe={ClasseId} exa={examen} ad={noteza.length} ae={noteze.length} {...props} />
}

const SemestreScreen = props => {
  return <Semestre2 noteClasses={notez2} classe={ClasseId} exa={examen} ad={notea.length} ae={notee.length} {...props} />
};


  return (
    <>
    <View>
      <Modal
        animationType={'fade'}
          transparent={true}
          visible={modalVisible}
        onRequestClose={() => {
          toggleModal (!modalVisible);
          }}
        style={{Color:'green' }}   
        > 
          <Box style={{ flex:1,backgroundColor:'rgba(0,0,0,.45)' }}>
          <View style={styles.modal}>
            <View style={{ position:'relative',marginVertical:10 }}>
              <Text style={styles.text}>Selectionner le type d'examen</Text>
            </View>
            <Divider color='rgba(118,118,118,.2)' style={{ marginHorizontal:25 }} />
            <View>
              <Pressable onPress={()=> Update('CC1')} style={styles.pressable}>
                <Text style={styles.textPres}>Contrôle continue N° 1</Text>
              </Pressable>
              <Pressable onPress={()=> Update('CC2')} style={styles.pressable}><Text style={styles.textPres}>Contrôle continue N° 2</Text></Pressable>
              <Pressable onPress={()=> Update('SESSION NORMALE')} style={styles.pressable}><Text style={styles.textPres}>Session normale</Text></Pressable>
              <Pressable onPress={()=> Update('RATRAPPAGE')} style={styles.pressable}><Text style={styles.textPres}> Examen de rattrapage</Text></Pressable>
            </View>
            </View>
            </Box>
      </Modal>
    </View>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarActiveBackgroundColor: 'red',
          tabBarInactiveTintColor: 'rgba(229, 241, 251,0.7)',
          tabBarActiveTintColor: 'white',
          tabBarItemStyle: {
            backgroundColor: 'rgb(0, 122, 204)',
            marginVertical: 8,
            // padding: 5,
          },
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '600',
          },
          tabBarStyle: {
            //   width: '92%',
            justifyContent: 'center',
            height: 60,
            backgroundColor: 'rgb(0, 122, 204)',
            // paddingVertical: 10,
          },
        }}
      >
        <Tab.Screen
          name="Semestre1"
          component={LayoutScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="home-outline" size={22} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Semestre2"
          component={SemestreScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="home-outline" size={22} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
      </>
   
  );
}

const styles = StyleSheet.create ({
  modal: {
    // flex: 1,
    // // alignItems: 'center',
    // backgroundColor: '#f7021a',
    width:'100%',
    position: 'absolute',
    bottom:0,
    backgroundColor: 'white',
    height: '30%',
    // elevation: 10,
    // shadowColor: 'black',

    // borderTopLeftRadius: 50,
    // borderTopRadius: 50,
    borderTopStartRadius: 40,
    borderTopEndRadius:40

  },
  text: {
    // color: 'rgb(0, 122, 204)',
    color:'rgba(0,0,0,.65)',
    fontSize: 18,
    fontWeight: '600',
    // marginTop: 10,
    textAlign:'center'
  },
  pressable: {
    padding:11
  },
  textPres: {
    color: 'rgb(0, 122, 204)',
    textAlign: 'center',
    fontSize: 17,
    fontWeight:'400'
  }
});
