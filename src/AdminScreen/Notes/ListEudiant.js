import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import Ratrapage1 from './ratrapage1';
import Ratrapage2 from './Ratrapage2';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {getClasseById, reset} from '../../../store/classe.slice';
import {getNoteByClassId} from '../../../store/note.slice';
import type, {StackScreenProps} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator ();

export default function ListEudiant({route}) {
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

      dispatch (getClasseById (route.params.classe.id));
      dispatch (getNoteByClassId (route.params.classe.id));

      return () => {
        dispatch (reset ());
      };
    },
    [isError, message, dispatch]
  );
  const notez = NoteClasses.filter (
    not =>
      not.typeNote === 'SESSION NORMALE' && not.typeSemestre === 'SEMESTRE1'
  );
  const noteza = NoteClasses.filter (
    not =>
      not.typeNote === 'SESSION NORMALE' &&
      not.typeSemestre === 'SEMESTRE1' &&
      not.moyenne >= 12
  );
  const noteze = NoteClasses.filter (
    not =>
      not.typeNote === 'SESSION NORMALE' &&
      not.typeSemestre === 'SEMESTRE1' &&
      not.moyenne < 12
  );

  const notezs = NoteClasses.filter (
    not =>
      not.typeNote === 'SESSION NORMALE' && not.typeSemestre === 'SEMESTRE2'
  );
  const notea = NoteClasses.filter (
    not =>
      not.typeNote === 'SESSION NORMALE' &&
      not.typeSemestre === 'SEMESTRE2' &&
      not.moyenne >= 12
  );
  const notee = NoteClasses.filter (
    not =>
      not.typeNote === 'SESSION NORMALE' &&
      not.typeSemestre === 'SEMESTRE2' &&
      not.moyenne < 12
  );

  console.log (NoteClasses);
  const Ratrapage1Screen = props => {
    return (
      <Ratrapage1
        data={notez}
        classe={ClasseId}
        ad={noteza.length}
        ae={noteze.length}
        {...props}
      />
    );
  };

  const Ratrapage2Screen = props => {
    return (
      <Ratrapage2
        data={notezs}
        classe={ClasseId}
        ad={notea.length}
        ae={notee.length}
        {...props}
      />
    );
  };

  return (
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
        component={Ratrapage1Screen}
        // component={Ratrapage1Screen}
        // initialParams={NoteClasses}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Semestre2"
        component={Ratrapage2Screen}
        // component={Ratrapage2Screen}
        // initialParams={NoteClasses}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
