import React from 'react';
// import {StatusBar} from 'react-native';
import Login from './src/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminScreen from './src/AdminScreen';
import EtudiantScreen from './src/EtudiantScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Image, Text, View} from 'react-native';
import Acceuil from './src/acceuil';
import ParentScreen from './src/Parent/Parent';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import Resultat from './src/AdminScreen/Resultat/Resultat';
import NotesClasses from './src/AdminScreen/Resultat/NotesClasses';
import Notes from './src/AdminScreen/Notes';
import Presence from './src/AdminScreen/Presence';
import Communique from './src/AdminScreen/Communique';
import Convocation from './src/AdminScreen/Convocation';
import ListEudiant from './src/AdminScreen/Notes/ListEudiant';
import DetailNotes from './src/AdminScreen/Notes/DetailNotes';
import VoirNote from './src/AdminScreen/Resultat/VoirNote';
import {Provider} from 'react-redux';
import {store} from './store';
import Parametre from './src/AdminScreen/Parametre/Parametre';
import Chat from './src/AdminScreen/Chat/Chat';
import AddCommunique from './src/AdminScreen/Communique/AddCommuinique';

// import {Text} from '@react-native-material/core';

const Stack = createNativeStackNavigator ();

const Buttons = () => {
  return <Icon name="settings" size={20} color="black" />;
};

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#1177BB',
          headerShadowVisible: false,
          headerBlurEffect: 'systemUltraThinMaterial',
          headerTitleStyle: {
            fontFamily: 'ChivoMono-Medium',
          },
        }}
        initialRouteName="Acceuil"
      >
        <Stack.Screen
          name="Acceuil"
          component={Acceuil}
          options={{
            // title: 'Welcome',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{
            headerShown: false,
            headerStyle: {
              // backgroundColor: 'red',
              alignItems: 'center',
            },
            headerTitleStyle: {
              color: 'green',
            },
            headerRight: Buttons,
          }}
        />

        {/*  debut screen de Admin */}
        <Stack.Screen
          name="Resultat"
          component={Resultat}
          options={{
            headerShown: false,
            headerStyle: {
              // backgroundColor: 'red',
              alignItems: 'center',
            },
            headerTitleStyle: {
              color: 'green',
            },
            // headerRight: btnn,
          }}
        />
        <Stack.Screen
          name="NotesClasses"
          // options={{title: 'Settings'}}
          component={NotesClasses}
          options={{
            headerTintColor: 'white',
            title: 'Listes Des notes',
            headerTransparent: true,
            // headerSearchBarOptions: {
            //   barTintColor: 'whitesmoke',
            //   tintColor: 'white',
            //   disableBackButtonOverride: true,
            //   headerIconColor: 'white',
            //   hideNavigationBar: true,
            //   // shouldShowHintSearchIcon: false,
            // },
            // headerShown: false,
            // drawerIcon: ({color}) => {
            //   return <Icon name="person-outline" size={22} color={color} />;
            // },
          }}
        />
        <Stack.Screen
          name="Voir"
          // options={{title: 'Settings'}}
          component={VoirNote}
          options={{
            headerTintColor: 'white',
            title: 'Notes Detaillées',
            headerTransparent: true,
            // headerSearchBarOptions: {
            //   barTintColor: 'whitesmoke',
            //   tintColor: 'white',
            //   disableBackButtonOverride: true,
            //   headerIconColor: 'white',
            //   hideNavigationBar: true,
            //   // shouldShowHintSearchIcon: false,
            // },
            // headerShown: false,
            // drawerIcon: ({color}) => {
            //   return <Icon name="person-outline" size={22} color={color} />;
            // },
          }}
        />
        <Stack.Screen
          name="Rattrapages"
          // options={{title: 'Settings'}}
          component={Notes}
          options={{
            title: 'Rattrapages',
            // headerShown: false,
            // drawerIcon: ({color}) => {
            //   return <Icon name="person-outline" size={22} color={color} />;
            // },
          }}
        />

        <Stack.Screen
          name="List"
          // options={{title: 'Settings'}}
          component={ListEudiant}
          options={{
            title: 'Liste des etudiants',
            headerTintColor: 'white',
            headerTransparent: true,
            // headerShown: false,
            // drawerIcon: ({color}) => {
            //   return <Icon name="person-outline" size={22} color={color} />;
            // },
          }}
        />
        <Stack.Screen
          name="DetailNotes"
          // options={{title: 'Settings'}}
          component={DetailNotes}
          options={{
            title: '',
            headerTintColor: 'white',
            headerTransparent: true,
            // headerShown: false,
            // drawerIcon: ({color}) => {
            //   return <Icon name="person-outline" size={22} color={color} />;
            // },
          }}
        />
        <Stack.Screen
          name="Presence"
          // options={{title: 'Settings'}}
          component={Presence}
          options={{
            title: 'Discipline horraire',
            // headerShown: false,
            // drawerIcon: ({color}) => {
            //   return <Icon name="person-outline" size={22} color={color} />;
            // },
          }}
        />
        <Stack.Screen
          name="Communique"
          // options={{title: 'Settings'}}
          component={Communique}
          options={{
            title: 'Communique',
            headerShadowVisible: true,
          }}
        />
        <Stack.Screen
          name="News"
          component={AddCommunique}
          options={{
            title: 'Nouveau communique',
          }}
        />
        <Stack.Screen
          name="Convocation"
          component={Convocation}
          options={{
            title: 'Convocation',
          }}
        />
        <Stack.Screen
          name="Parametre"
          // options={{title: 'Settings'}}
          component={Parametre}
          options={{
            title: 'Reglage',
          }}
        />
        <Stack.Screen
          name="Chat"
          // options={{title: 'Settings'}}
          component={Chat}
          options={{
            title: 'Messageries',
          }}
        />
        {/* END ADMINsCREEN */}

        <Stack.Screen
          name="Etudiant"
          component={EtudiantScreen}
          options={{
            headerShown: false,
            headerStyle: {
              // backgroundColor: 'red',
              alignItems: 'center',
            },
            headerTitleStyle: {
              color: 'green',
            },
          }}
        />
        <Stack.Screen
          name="Parent"
          component={EtudiantScreen}
          options={{
            headerShown: false,
            headerStyle: {
              // backgroundColor: 'red',
              alignItems: 'center',
            },
            headerTitleStyle: {
              color: 'green',
            },
          }}
        />

        {/* <Stack.Screen name="Parent" component={ParentScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
