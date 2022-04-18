import { View, ViewStyle } from 'react-native';
import { Text } from '../Text';
import React from 'react';
import IssueStateBadge from './IssueStateBadge';
import { Issue } from '../../hooks/issues/types';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { isTemplateSpan } from 'typescript';
import { CenteringRow } from '../Rows';

const IssueInfoRow = ({
  issue,
  style,
  type,
}: {
  issue: Issue;
  style?: ViewStyle;
  type?: 'created-at';
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...style,
      }}
    >
      {!type && (
        <>
          <Text style={[{ color: 'gray' }]}>{'#' + issue.id}</Text>
          <IssueStateBadge state={issue.state} />
        </>
      )}
      {type === 'created-at' && (
        <>
          <CenteringRow>
            <AntDesign name="calendar" size={24} color="black" />
            <Text style={[{ color: 'gray' }]}>{issue.created_at}</Text>
          </CenteringRow>
          <CenteringRow>
            <Text>{issue.comments.toString()}</Text>
            <EvilIcons name="comment" size={24} color="black" />
          </CenteringRow>
        </>
      )}
    </View>
  );
};

export default IssueInfoRow;
