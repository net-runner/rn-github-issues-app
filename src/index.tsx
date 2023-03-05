import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Appearance } from 'react-native';
import { Main } from './navigation/Main';
import './constants/translations';
import { IssuesProvider } from './hooks/issues/IssuesProvider';
import { ThemeProvider } from '@emotion/react';

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
    <IssuesProvider>
      <NavigationContainer theme={currentTheme} ref={navigationRef}>
        <ThemeProvider theme={currentTheme}>
          <Main />
        </ThemeProvider>
      </NavigationContainer>
    </IssuesProvider>
  );
}
