import { View, Text, Image } from 'react-native';
import React from 'react';
import { IssueComment as IssueCommentInterface } from '../../hooks/issues/types';
import Markdown from 'react-native-markdown-display';

const IssueComment = ({ comment }: { comment: IssueCommentInterface }) => {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 30,
      }}
    >
      <View style={{ alignItems: 'flex-start', marginBottom: 15 }}>
        <Text>{'@' + comment.user.login}</Text>
      </View>

      <Markdown>{comment.body}</Markdown>
    </View>
  );
};

export default IssueComment;
