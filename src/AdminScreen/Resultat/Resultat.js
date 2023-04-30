import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {SettingsScreen} from '../screens/SettingsScreen';
// import {StackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './customDrawer';
import {
  useWindowDimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Class from './class';
import Class1 from './Class1';
import Dashboard from './Dashboard';
import NotesClasses from './NotesClasses';
import {IconButton} from '@react-native-material/core';
// import AdminScreen from '../AdminScreen';

const Drawer = createDrawerNavigator ();

// const Visible = () => {
//   setIsVisible (true);
// };
export default function Resultat({navigation}) {
  const {width, height} = useWindowDimensions ();
  const filterBtn = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
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
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    );
  };

  // const [isVisible, SetIsVisible] = useState (false);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: '#1177BB',
        headerTitleStyle: {
          fontFamily: 'ChivoMono-Medium',
        },
        // drawerType: width >= height ? 'permanent' : 'front',
        drawerPosition: 'left',
        drawerActiveBackgroundColor: '#1177BB',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerLeft: () => {
          return (
            <IconButton
              onPress={() => navigation.goBack ()}
              color="#1177BB"
              icon={props => <Icon name="md-arrow-back" size={27} {...props} />}
            />
          );
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        // options={{title: 'Home'}}
        component={Dashboard}
        options={{
          title: 'Resultats',
          drawerIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
          headerRight: filterBtn,
        }}
      />

      <Drawer.Screen
        name="Class"
        // options={{title: 'Home'}}
        component={Class}
        options={{
          title: 'Class',
          drawerIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Class1"
        // options={{title: 'Settings'}}
        component={Class1}
        options={{
          title: 'Class1',
          // headerShown: false,
          drawerIcon: ({color}) => {
            return <Icon name="person-outline" size={22} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
