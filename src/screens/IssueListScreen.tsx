import React from 'react';
import IssuesList from '../components/Issues/IssuesList';
import { Page } from '../components/Page';

const IssueListScreen = () => {
  return (
    <Page style={{ padding: 0 }}>
      <IssuesList />
    </Page>
  );
};

export default IssueListScreen;
