import { View, Text, ScrollView, TextInput } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { Page } from '../components/Page';
import { Button } from '../components/Button/Button';
import { RowBetween } from '../components/Rows';
import { getRepo } from '../api/repo';
import { useIssues } from '../hooks/issues/IssuesProvider';
import Icon from 'react-native-vector-icons/AntDesign';
import { CenterPage } from '../components/CenterPage';
import RepoFind from '../components/Repos/RepoFind';
import RepoItemList from '../components/Repos/RepoItemList';
import { debounce } from 'lodash';
import { AnimatePresence, MotiView } from 'moti';

const RepoList = () => {
  const { repos, issuesDispatch } = useIssues();
  const [RepoName, setRepoName] = useState('');
  const [repoError, setRepoError] = useState<
    'found' | 'not-found' | 'same' | 'api'
  >('not-found');

  const repoList = useMemo(() => (repos ? Object.values(repos) : []), [repos]);
  const handleRequest = useCallback(
    (repo_text: string) => {
      getRepo(repo_text).then(repo => {
        if (repoList.some(r => r.id === repo.id)) {
          setRepoError('same');
        } else {
          if (repo.message) {
            repo.message[0] === 'A' || repo.message[0] === 'B'
              ? setRepoError('api')
              : setRepoError('not-found');
          } else {
            setRepoError('found');
          }
        }
      });
    },
    [repoList],
  );
  const reqRepo = useCallback(
    debounce(repo_text => handleRequest(repo_text), 1555),
    [],
  );
  const handleChange = (text: string) => {
    setRepoName(text);
    reqRepo(text);
  };

  const handleAddRepo = () => {
    if (repoError === 'found') {
      getRepo(RepoName)
        .then(repo => {
          issuesDispatch({ type: 'repo-add', payload: { repo } });
          setRepoName('');
          setRepoError('not-found');
        })
        .catch(error => {
          setRepoName(error);
        });
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#e8eaed' }}
    >
      <Page>
        <RowBetween
          style={{
            borderRadius: 5,
            paddingHorizontal: 5,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              height: 45,
              fontSize: 18,
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: 'white',
            }}
            autoCapitalize="none"
            placeholder="eg. facebook/react-native"
            multiline={false}
            value={RepoName}
            onChangeText={text => handleChange(text)}
          />
          <Button
            style={{
              width: 45,
              height: 45,
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => handleAddRepo()}
          >
            <Icon name="plus" size={18} color="white" />
          </Button>
        </RowBetween>
        <AnimatePresence>
          {RepoName.length > 4 && <RepoFind repoError={repoError} />}
        </AnimatePresence>

        <RepoItemList repoList={repoList} />
        <AnimatePresence>
          {repoList.length === 0 && (
            <CenterPage>
              <MotiView
                from={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                }}
              >
                <Text style={{ fontSize: 25 }}>Your repo list is empty</Text>
              </MotiView>
            </CenterPage>
          )}
        </AnimatePresence>
      </Page>
    </ScrollView>
  );
};

export default RepoList;
