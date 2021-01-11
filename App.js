import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './src/context/AppContext';
import Tab from './src/Tab';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadFont();
  }, []);
  return !isReady ? (
    <AppLoading />
  ) : (
    <AppContextProvider>
      <Tab />
    </AppContextProvider>
  );
}
