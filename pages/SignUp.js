import React from 'react';
import { WebView } from 'react-native-webview';
import { AppLoading } from 'expo';

export default function SignUp() {
  return (
    <WebView
      renderLoading={() => {
        return <AppLoading />;
      }}
      source={{ uri: 'https://website-ecobrains.herokuapp.com/sign-up' }}
    />
  );
}
