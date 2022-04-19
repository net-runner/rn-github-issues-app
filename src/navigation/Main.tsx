import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import RepoList from '../screens/RepoList';
import IssueDetails from '../screens/IssueDetails';
import IssueList from '../screens/IssueList';

export type MainStackParams = {
  RepoList: undefined;
  IssueDetails: {
    id: string;
  };
  IssueList: {
    id: string;
    open_issues: number;
  };
};

const MainStack = createNativeStackNavigator<MainStackParams>();

export const Main = () => {
  const { t } = useTranslation();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="RepoList"
        component={RepoList}
        options={{ headerTitle: t('ui.repo-list') }}
      />
      <MainStack.Screen
        name="IssueList"
        component={IssueList}
        options={{ headerTitle: t('ui.issues') }}
      />
      <MainStack.Screen
        name="IssueDetails"
        component={IssueDetails}
        options={{ headerTitle: t('ui.issues-details') }}
      />
    </MainStack.Navigator>
  );
};
