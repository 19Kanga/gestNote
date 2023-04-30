import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sm1 from './Sm1';
import Sm2 from './Sm2';
import Ratrapage1 from './ratrapage1';
import Ratrapage2 from './Ratrapage2';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator ();

// const btns = props => {
//   return <Text><Icon name="person" /></Text>;
// };

export default function ListEudiant () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveBackgroundColor: 'red',
        tabBarInactiveTintColor: 'rgba(229, 241, 251,0.7)',
        tabBarActiveTintColor: 'white',
        tabBarItemStyle: {
          backgroundColor: 'rgb(0, 122, 204)',
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
        },
        tabBarStyle: {
          //   width: '92%',
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Semestre1"
        component={Ratrapage1}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Semestre2"
        component={Ratrapage2}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
