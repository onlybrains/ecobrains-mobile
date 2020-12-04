import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { AppLoading } from 'expo';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import ecobrainsIcon from '../assets/eco-logo-branco.png';
import ecobrains from '../assets/eco-branco.png';

export default function SignUp() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

}

class MyWebComponent extends Component {
  render(){
    return
    <WebView
    source={{
      uri: 'https://www.google.com/',
    }} />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#095b26',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%',
    marginBottom: 10,
    padding: 20,
  },
  title: {
    margin: 20,
    fontSize: 40,
    color: '#095b26',
    fontFamily: 'Poppins_700Bold',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
  },
  textBold: {
    margin: 20,
    fontSize: 20,
    color: '#095b26',
    fontFamily: 'Poppins_700Bold',
  },
  ecoLogo: {
    height: 70,
    width: 70,
    marginRight: 10,
    resizeMode: 'contain',
  },
  ecoTexto: {
    width: 170,
    height: 70,
    resizeMode: 'contain',
  },

});
