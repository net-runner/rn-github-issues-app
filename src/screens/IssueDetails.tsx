import { View, ScrollView, TextInput } from 'react-native';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Markdown from 'react-native-markdown-display';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import IssueCommentSection from '../components/Issues/IssueCommentSection';
import IssueInfoRow from '../components/Issues/IssueInfoRow';
import { Text } from '../components/Text';
import { Page } from '../components/Page';
import { useIssues } from '../hooks/issues/IssuesProvider';
import { MainStackParams } from '../navigation/Main';
import { Button } from '../components/Button/Button';

type IssueDetailsProp = NativeStackScreenProps<MainStackParams, 'IssueDetails'>;

const IssueDetails = ({ route }: IssueDetailsProp) => {
  const [CommentText, setCommentText] = useState('');
  const { issues, issuesDispatch } = useIssues();
  const issue = useMemo(
    () => issues[route.params.id],
    [route.params.id, issues[route.params.id]],
  );

  const getComments = useCallback(
    () => fetch(issue.comments_url).then(data => data.json()),
    [issue.comments_url],
  );
  const comments =
    (issue.comment_list && Object.values(issue.comment_list)) || [];

  const addComment = () => {
    const newComment = {
      body: CommentText,
      user: {
        login: '@net-runner',
        id: 2233445566,
        avatar_url: '',
        html_url: 'https://github.com/net-runner',
      },
    };
    issuesDispatch({
      type: 'add-comment',
      payload: { id: issue.id, comment: newComment },
    });
    setCommentText('');
  };
  useEffect(() => {
    let unmounted = false;
    if (!issue.comment_list) {
      !unmounted &&
        getComments()
          .then(data =>
            issuesDispatch({
              type: 'fetch-comment',
              payload: { data, id: issue.id },
            }),
          )
          .catch(error => {
            issuesDispatch({ type: 'error', payload: { error } });
          });
    }
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Page>
        <Text type="header">{issue.title}</Text>
        <IssueInfoRow type="created-at" issue={issue} />
        <IssueInfoRow style={{ marginBottom: 20 }} issue={issue} />
        <Markdown>{issue.body}</Markdown>
        <IssueCommentSection comment_list={comments} />
        <Text type="header">Add new comment</Text>
        <View
          style={{
            padding: 15,
            borderRadius: 5,
            backgroundColor: '#fff',
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            placeholder="Comment text... u can also use markdown"
            multiline
            value={CommentText}
            onChange={e => setCommentText(e.nativeEvent.text)}
          />
          <Button style={{ marginTop: 25 }} onPress={addComment}>
            Add
          </Button>
        </View>
      </Page>
    </ScrollView>
  );
};

export default IssueDetails;
