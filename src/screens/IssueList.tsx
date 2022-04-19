import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { debounce } from 'lodash';
import { getIssues } from '../api/issues';
import IssueItem from '../components/Issues/IssueItem';
import IssueListFooter from '../components/Issues/IssueListFooter';
import { Page } from '../components/Page';
import { useIssues } from '../hooks/issues/IssuesProvider';
import { MainStackParams } from '../navigation/Main';
import SearchBar from '../components/SearchBar/SearchBar';

type IssueListProps = NativeStackNavigationProp<MainStackParams, 'IssueList'>;

const IssuesList = ({ navigation, route }: IssueListProps) => {
  const { issues, issuesDispatch, queryPage, currentRepo } = useIssues();
  const [Filter, setFilter] = useState('');
  const { navigate } = navigation;
  const { id, open_issues } = route.params;

  const issueList = useMemo(() => Object.values(issues), [issues]);

  const isAllIssuesFetched = issueList.length === open_issues;

  const fetchIssues = useCallback((page: number, repo: string) => {
    if (!isAllIssuesFetched) {
      getIssues(page, 20, repo)
        .then(issues => {
          issuesDispatch({ type: 'fetch', payload: { data: issues } });
          issuesDispatch({ type: 'queryPageIncrease' });
        })
        .catch(error => {
          issuesDispatch({ type: 'error', payload: { error } });
        });
    }
  }, []);

  const debouncedFetchIssues = useCallback(
    debounce((page: number, repo: string) => fetchIssues(page, repo), 2555),
    [],
  );
  const handleChange = (val: string) => {
    setFilter(val);
  };

  const issuesFiltered = useMemo(
    () =>
      issueList.filter(i =>
        i.title.toLowerCase().includes(Filter.toLowerCase()),
      ),
    [Filter, issues],
  );

  useEffect(() => {
    if (issueList.length === 0) debouncedFetchIssues(queryPage, currentRepo);
  }, [currentRepo]);

  return (
    <Page style={{ padding: 0 }}>
      <SearchBar
        placeholder="Search issues..."
        value={Filter}
        setValue={handleChange}
      />
      <FlatList
        contentContainerStyle={{ marginTop: 20, paddingBottom: 20 }}
        data={issuesFiltered}
        removeClippedSubviews
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0}
        ListFooterComponent={() =>
          Filter === '' && !isAllIssuesFetched ? <IssueListFooter /> : null
        }
        initialNumToRender={20}
        onEndReached={() => {
          debouncedFetchIssues(queryPage, currentRepo);
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate('IssueDetails', item)}>
            <IssueItem issue={item} />
          </TouchableOpacity>
        )}
      />
    </Page>
  );
};

export default IssuesList;
