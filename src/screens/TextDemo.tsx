import React from 'react';
import { Text } from '../components/Text';
import { Page } from '../components/Page';

export const TextDemo = () => (
  <Page>
    <Text type="header">This is a header</Text>
    <Text type="subheader">This is a subheader</Text>
    <Text>This is normal text</Text>
  </Page>
);

export default TextDemo;
