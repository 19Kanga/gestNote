import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {SettingsScreen} from '../screens/SettingsScreen';
// import {StackNavigator} from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './customDrawer';
import {useWindowDimensions, StyleSheet, View, Text} from 'react-native';
import AdminScreen from '../AdminScreen';
// import Second from './second';
import Layout1 from './Layout/layout1';
import Layout2 from './Layout/Layout2';
import Second from './second';
import {Pressable} from '@react-native-material/core';

const Drawer = createDrawerNavigator ();

const EtudiantScreen = ({navigation}) => {
  // return (
  //   <View style={styles.container}>
  //     <Text>EtudiantScreen</Text>
  //     <Button
  //       title="Go to Jaile"
  //       onPress={() => navigation.navigate ('Admin')}
  //     />

  //   </View>
  // );
  //To show permanent drawer when screen is rotated
  const {width, height} = useWindowDimensions ();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        // drawerType: width >= height ? 'permanent' : 'front',
        headerTitleAlign: 'center',
        headerTintColor: '#1177BB',
        headerTitleStyle: {
          fontFamily: 'ChivoMono-Medium',
        },
        drawerPosition: 'left',
        drawerActiveBackgroundColor: 'rgb(0, 122, 204)',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -15,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
        headerRight: () => (
          <View
            style={{
              borderRadius: 50,
              overflow: 'hidden',
              marginRight: 12,
            }}
          >
            <Pressable
              style={{padding: 7}}
              pressEffectColor="rgba(0, 122, 204,.04)"
            >
              <Icon name="notifications-outline" size={24} color="#1177BB" />
            </Pressable>
          </View>
        ),
      }}
    >

      <Drawer.Screen
        name="Layout2"
        // options={{title: 'Home'}}
        component={Layout2}
        options={{
          title: 'Acceuil',
          drawerIcon: ({color}) => {
            return <Icon name="home-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Layout1"
        // options={{title: 'Settings'}}
        component={Layout1}
        options={{
          title: 'Voir les resultas',
          headerShown: false,
          drawerIcon: ({color}) => {
            return (
              <Icon name="ios-newspaper-outline" size={22} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Noti"
        // options={{title: 'Settings'}}
        component={Layout1}
        options={{
          title: 'Notifications',
          headerShown: false,
          drawerIcon: ({color}) => {
            return (
              <Icon name="notifications-outline" size={22} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="SECOND"
        // options={{title: 'Settings'}}
        component={Second}
        options={{
          title: 'Communiqué',
          headerShown: false,
          drawerIcon: ({color}) => {
            return <Icon name="megaphone-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="parametre"
        // options={{title: 'Settings'}}
        component={Second}
        options={{
          title: 'Parametre',
          headerShown: false,
          drawerIcon: ({color}) => {
            return <Icon name="settings-outline" size={22} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default EtudiantScreen;
