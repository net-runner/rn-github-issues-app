import { View, Text, Image } from 'react-native';
import React from 'react';
import { IssueComment as IssueCommentInterface } from '../../hooks/issues/types';
import Markdown from 'react-native-markdown-display';
import { MotiView } from 'moti';

const IssueComment = ({ comment }: { comment: IssueCommentInterface }) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
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
    </MotiView>
  );
};

export default IssueComment;
