import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';

import { FlatList } from 'react-native-gesture-handler';
import IssueItem from './IssueItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParams } from '../../navigation/Main';
import IssueListFooter from './IssueListFooter';
import { getIssues } from '../../api/issues';
import SearchBar from '../SearchBar/SearchBar';
import { useIssues } from '../../hooks/issues/IssuesProvider';

type NavigationProps = NativeStackNavigationProp<MainStackParams, 'IssueList'>;

const IssuesList = () => {
  const { issues, issuesDispatch, queryPage } = useIssues();
  const [Filter, setFilter] = useState('');
  const { navigate } = useNavigation<NavigationProps>();
  const issueList = useMemo(() => Object.values(issues), [issues]);

  const fetchIssues = useCallback(() => {
    getIssues(queryPage)
      .then(issues => {
        issuesDispatch({ type: 'fetch', payload: { data: issues } });
        issuesDispatch({ type: 'queryPageIncrease' });
      })
      .catch(error => {
        issuesDispatch({ type: 'error', payload: { error } });
      });
  }, [queryPage]);

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

  if (issueList.length === 0) fetchIssues();
  return (
    <>
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
        ItemSeparatorComponent={() => <View style={{ margin: 15 }} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0}
        ListFooterComponent={() => (Filter === '' ? <IssueListFooter /> : null)}
        initialNumToRender={20}
        onEndReached={() => {
          fetchIssues();
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate('IssueDetails', item)}>
            <IssueItem issue={item} />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default IssuesList;
