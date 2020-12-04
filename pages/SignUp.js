import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  WebView,
} from 'react-native';
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#095b26" />
      <View style={styles.header}>
        <Image style={styles.ecoLogo} source={ecobrainsIcon} />
        <Image style={styles.ecoTexto} source={ecobrains} />
      </View>
      <ScrollView>
        <Text style={styles.title}>
          Um novo jeito de ser ecológico, usando apenas a mente.
        </Text>
        <Text style={styles.text}>
          Ter um pensamento ecológico é muito mais que separar o lixo da sua
          entre o reciclável e o orgânico. Pensar ecologicamente é ter a certeza
          que conta com empresas e cooperativas responsáveis, e que entendem da
          importância de todo o processo. EcoBrains, movendo o mundo, pensando
          no amanhã.{"\n"}
          <Text style={styles.textBold}>EcoBrains, movendo o mundo, pensando no amanhã.</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

// <WebView
//  source = {{
//    uri:'https://www.google.com/',
//  }}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#095b26',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 370,
    marginBottom: 10,
    padding: 10,
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
