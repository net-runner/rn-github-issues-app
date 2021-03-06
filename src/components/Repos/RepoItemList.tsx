import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Repo } from '../../hooks/issues/types';
import RepoItem from './RepoItem';

const RepoItemList = ({ repoList }: { repoList: Repo[] }) => {
  return (
    <View style={{ marginTop: 20 }}>
      {repoList.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </View>
  );
};

export default RepoItemList;
