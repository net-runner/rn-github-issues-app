import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Main } from './navigation/Main';
import './constants/translations';

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { connectToDevTools } = require('react-devtools-core');
  connectToDevTools({
    host: 'localhost',
    port: 8097,
  });
}
export default function App() {
  const colorScheme = Appearance.getColorScheme();
  const currentTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <StatusBar style="auto" animated />

      <NavigationContainer theme={currentTheme} ref={navigationRef}>
        <ThemeProvider theme={currentTheme}>
          <Main />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}
