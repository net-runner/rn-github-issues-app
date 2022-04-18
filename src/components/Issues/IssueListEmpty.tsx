import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Page } from '../Page';
import { Button } from '../Button/Button';
import { CenterPage } from '../CenterPage';
const windowHeight = Dimensions.get('window').height;
const IssueListEmpty = ({ fetchIssues }: { fetchIssues: () => void }) => {
  return (
    <CenterPage style={{ height: windowHeight }}>
      <Text>IssueListEmpty</Text>
      <Button onPress={fetchIssues}>Fetch issues</Button>
    </CenterPage>
  );
};

export default IssueListEmpty;
