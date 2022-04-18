import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { CenteringRow } from '../Rows';

const IssueListFooter = () => {
  return (
    <CenteringRow style={{ marginTop: 20, marginBottom: 10 }}>
      <Text>Loading more issues...</Text>
      <ActivityIndicator size={'large'} color={'black'} />
    </CenteringRow>
  );
};

export default IssueListFooter;
