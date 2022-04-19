import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Repo } from '../../hooks/issues/types';
import { Row, RowBetween } from '../Rows';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useIssues } from '../../hooks/issues/IssuesProvider';

const RepoItem = ({ repo }: { repo: Repo }) => {
  const { issuesDispatch } = useIssues();

  const handleRepoRemove = () => {
    issuesDispatch({ type: 'repo-delete', payload: { id: repo.id } });
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 15,
      }}
    >
      <RowBetween style={{ paddingHorizontal: 15, paddingTop: 15 }}>
        <Row>
          <Feather name="eye" size={18} color="gray" />
          <Text style={{ color: 'gray', marginRight: 15, marginLeft: 5 }}>
            {repo.watchers_count}
          </Text>
          <Feather name="star" size={18} color="gray" />
          <Text style={{ color: 'gray', marginRight: 15, marginLeft: 5 }}>
            {repo.stargazers_count}
          </Text>
          <AntDesign name="fork" size={18} color="gray" />
          <Text style={{ color: 'gray', marginLeft: 5 }}>
            {repo.forks_count}
          </Text>
        </Row>
        <Row>
          <TouchableOpacity onPress={() => handleRepoRemove()}>
            <FontAwesome name="remove" size={18} color="gray" />
          </TouchableOpacity>
        </Row>
      </RowBetween>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          {repo.full_name}
        </Text>
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
    </View>
  );
};

export default RepoItem;
