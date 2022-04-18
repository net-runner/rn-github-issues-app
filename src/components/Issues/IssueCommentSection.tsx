import { View } from 'react-native';
import { Text } from '../Text';
import React from 'react';
import { IssueComment as IssueCommentInterface } from '../../hooks/issues/types';
import IssueComment from './IssueComment';

const IssueCommentSection = ({
  comment_list,
}: {
  comment_list: IssueCommentInterface[];
}) => {
  return (
    <View>
      <Text type="header" style={[{ marginTop: 20 }]}>
        Comments
      </Text>
      {comment_list.map(comment => (
        <IssueComment key={comment.id} comment={comment} />
      ))}
    </View>
  );
};

export default IssueCommentSection;
