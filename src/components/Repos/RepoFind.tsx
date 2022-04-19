import { View, Text } from 'react-native';
import React from 'react';
import { Row } from '../Rows';

const RepoFind = ({
  repoError,
}: {
  repoError: 'found' | 'not-found' | 'same' | 'api';
}) => {
  const text = () => {
    switch (repoError) {
      case 'found':
        return 'Valid repo';
      case 'same':
        return 'Repo is already on the list';
      default:
        return 'Repo not found';
    }
  };
  return (
    <Row style={{ alignItems: 'center', paddingHorizontal: 5 }}>
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginRight: 5,
          backgroundColor: repoError === 'found' ? 'green' : 'red',
        }}
      />
      <Text
        style={{
          color: repoError === 'found' ? 'green' : 'red',
        }}
      >
        {text()}
      </Text>
    </Row>
  );
};

export default RepoFind;
