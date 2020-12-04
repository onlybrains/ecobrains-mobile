import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import { AppLoading } from 'expo';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
class MyWebComponent extends Component {
  render() {
    return <WebView source={{ uri: 'https://website-ecobrains.herokuapp.com/sign-up' }} />;
  }
}

export default function SignUp() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <MyWebComponent />;
}
