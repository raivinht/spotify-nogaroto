import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { 
  useFonts,
  Lato_700Bold,
  Lato_400Regular
 } from '@expo-google-fonts/lato';

import AppLoading from 'expo-app-loading';

import Page from './src/telas';
import mock from './src/mocks/music';

export default function App() {
  const [fonteCarregada] = useFonts({
    "LatoBold": Lato_700Bold,
    "LatoNormal": Lato_400Regular,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar />
        <Page {...mock} />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  }
});