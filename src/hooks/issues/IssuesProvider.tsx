import React, { useContext } from 'react';
import { Issue, IssuesAction } from '../../hooks/issues/types';

import { ActivityIndicator } from 'react-native';
import { Page } from '../../components/Page';
import { useIssuesCollection } from './issues';

type IssueContextType = {
  issues: {
    [key: string]: Issue;
  };
  queryPage: number;
  issuesDispatch: React.Dispatch<IssuesAction>;
};

export const IssueContext = React.createContext<IssueContextType | undefined>(
  undefined,
);

export const IssuesProvider: React.FC = ({ children }) => {
  const [{ initialized, issues, queryPage }, issuesDispatch] =
    useIssuesCollection();
  return (
    <IssueContext.Provider value={{ issues, issuesDispatch, queryPage }}>
      {initialized ? (
        children
      ) : (
        <Page>
          <ActivityIndicator color={'black'} size={'large'} />
        </Page>
      )}
    </IssueContext.Provider>
  );
};

export const useIssues = () => {
  const issuesCtx = useContext(IssueContext);
  if (!issuesCtx) {
    throw new Error('Component beyond Issues context!');
  }
  return issuesCtx;
};
