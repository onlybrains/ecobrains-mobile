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

export default function Sobre() {
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
          O projeto EcoBrains
        </Text>
        <Text style={styles.text}>
          Por meio de nossas pesquisas e entrevistas com funcionários ativos nas áreas que serão atingidas por essa aplicação, concluímos que podemos facilitar o contato entre empresas e cooperativas que atualmente ainda é muito burocrático e difícil.
          {"\n"} {"\n"}
          Conseguimos entender que a maioria das empresas tanto quanto das cooperativas tem acesso a internet o que automaticamente facilita o acesso para aplicações web. Pensando nessa facilidade tivemos a ideia de desenvolver uma aplicação web utilizando as tecnologias mais recentes e as normas e instruções relacionadas a experiência e interface para o usuário.
          {"\n"} {"\n"}
          Pretendemos com essa aplicação interligar a comunicação e as necessidades propostas por esses dois grupos, além de facilitar e agilizar o contato e a negociação entre estes.{"\n"}
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
