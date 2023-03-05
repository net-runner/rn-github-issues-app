import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Repo } from '../../hooks/issues/types';
import { Row, RowBetween } from '../Rows';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useIssues } from '../../hooks/issues/IssuesProvider';
import { useNavigation } from '@react-navigation/native';
import { MainStackParams } from '../../navigation/Main';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AnimatePresence, MotiView } from 'moti';

type NavigationProps = NativeStackNavigationProp<MainStackParams, 'RepoList'>;
const RepoItem = ({ repo }: { repo: Repo }) => {
  const { issuesDispatch } = useIssues();
  const { navigate } = useNavigation<NavigationProps>();

  const handleRepoRemove = () => {
    issuesDispatch({ type: 'repo-delete', payload: { id: repo.id } });
  };
  const handleNavigate = () => {
    issuesDispatch({
      type: 'repo-set-navigate',
      payload: { id: repo.full_name },
    });
    navigate('IssueList', { id: repo.id, open_issues: repo.open_issues });
  };
  return (
    <AnimatePresence>
      <MotiView
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'timing',
          duration: 350,
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
        }}
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
        <TouchableOpacity onPress={() => handleNavigate()}>
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
            <Text>{'Open issues: ' + repo.open_issues}</Text>
          </View>
        </TouchableOpacity>
      </MotiView>
    </AnimatePresence>
  );
};

export default RepoItem;
