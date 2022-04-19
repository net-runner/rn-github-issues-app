import { View, Text } from 'react-native';
import React from 'react';
import { Repo } from '../../hooks/issues/types';
import { RowBetween } from '../Rows';

const RepoItem = ({ repo }: { repo: Repo }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
      }}
    >
      <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{repo.full_name}</Text>
      <Text>{repo.description}</Text>
      <RowBetween>
        <View>
          <Text>{'Created: ' + repo.created_at.split('T')[0]}</Text>
        </View>
        <View>
          <Text>{'Last update: ' + repo.updated_at.split('T')[0]}</Text>
        </View>
      </RowBetween>
    </View>
  );
};

export default RepoItem;
