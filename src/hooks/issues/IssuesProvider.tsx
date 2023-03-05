import React, { useContext } from 'react';
import { Issue, IssuesAction, Repo } from '../../hooks/issues/types';

import { ActivityIndicator } from 'react-native';
import { Page } from '../../components/Page';
import { useIssuesCollection } from './issues';

type IssueContextType = {
  issues: {
    [key: string]: Issue;
  };
  repos: {
    [key: string]: Repo;
  };
  queryPage: number;
  currentRepo: string;
  issuesDispatch: React.Dispatch<IssuesAction>;
};

export const IssueContext = React.createContext<IssueContextType | undefined>(
  undefined,
);

type Props = {
  children?: React.ReactNode;
};

export const IssuesProvider = ({ children }: Props) => {
  const [
    { initialized, issues, queryPage, repos, currentRepo },
    issuesDispatch,
  ] = useIssuesCollection();
  return (
    <IssueContext.Provider
      value={{ issues, issuesDispatch, queryPage, repos, currentRepo }}
    >
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
