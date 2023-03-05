import { View, Text } from 'react-native';
import React from 'react';
import { Issue } from '../../hooks/issues/types';
import styled from '@emotion/native';

interface BadgeProps {
  state: Issue['state'];
}
const IssueStateBadge = ({ state }: BadgeProps) => {
  return (
    <StateLabel state={state}>
      <StateText state={state}>{state}</StateText>
    </StateLabel>
  );
};

const StateLabel = styled.View<BadgeProps>`
  border: 2px solid ${props => (props.state === 'open' ? 'green' : 'red')};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 3px;
`;

const StateText = styled.Text<BadgeProps>`
  color: ${props => (props.state === 'open' ? 'green' : 'red')};
`;

export default IssueStateBadge;
