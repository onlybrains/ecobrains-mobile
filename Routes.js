import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import SignUp from './pages/SignUp';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName={'Sobre'}
      tabBarOptions={{
        activeTintColor: '#3BBF69',
        inactiveTintColor: '#d9d9d9',
        style: { backgroundColor: '#095b26' },
      }}>
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Comece aqui"
        component={SignUp}
        options={{
          tabBarLabel: 'Comece aqui',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sign-in" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
