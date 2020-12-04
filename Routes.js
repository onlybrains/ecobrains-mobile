import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import SignUp from './pages/SignUp';

const Tab = createBottomTabNavigator();

export default function Routes() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tab.Navigator
      initialRouteName={'Início'}
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins_700Bold',
        },
        activeTintColor: '#d9d9d9',
        inactiveTintColor: '#2e9451',
        style: { backgroundColor: '#095b26', height: 60 },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={33}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Comece aqui"
        component={SignUp}
        options={{
          tabBarLabel: 'Comece aqui',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="sign-in" color={color} size={33} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
