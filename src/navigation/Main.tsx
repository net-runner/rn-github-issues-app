import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { List } from '../screens/List';
import { FormDemo } from '../screens/FormDemo';
import TextDemo from '../screens/TextDemo';
import { ButtonDemo } from '../screens/ButtonsDemo';
import LangDemo from '../screens/LangDemo';

export type MainStackParams = {
  List: undefined;
  TextDemo: undefined;
  FormDemo: undefined;
  ButtonDemo: undefined;
  LangDemo: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParams>();

export const Main = () => {
  const { t } = useTranslation();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="List"
        component={List}
        options={{ headerTitle: t('demo-screens.list.header') }}
      />
      <MainStack.Screen
        name="TextDemo"
        component={TextDemo}
        options={{ headerTitle: t('demo-screens.form.header') }}
      />
      <MainStack.Screen
        name="FormDemo"
        component={FormDemo}
        options={{ headerTitle: t('demo-screens.form.header') }}
      />
      <MainStack.Screen
        name="ButtonDemo"
        component={ButtonDemo}
        options={{ headerTitle: t('demo-screens.button.header') }}
      />
      <MainStack.Screen
        name="LangDemo"
        component={LangDemo}
        options={{ headerTitle: t('demo-screens.lang.header') }}
      />
    </MainStack.Navigator>
  );
};
