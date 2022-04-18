import { View } from 'react-native';
import { Text } from '../Text';
import React, { useMemo } from 'react';
import { Issue } from '../../hooks/issues/types';
import IssueInfoRow from './IssueInfoRow';

const IssueItem = ({ issue }: { issue: Issue }) => {
  const is = useMemo(() => issue, [issue, issue.comments]);
  return (
    <View
      style={{
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 2,
        padding: 10,
      }}
    >
      <Text>{is.title}</Text>
      <IssueInfoRow type="created-at" issue={is} />
      <IssueInfoRow issue={is} />
    </View>
  );
};

export default IssueItem;
