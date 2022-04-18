import { View, Text, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Page } from '../components/Page';
import { Button } from '../components/Button/Button';
import { RowBetweem } from '../components/Rows';

const RepoList = () => {
  const [RepoName, setRepoName] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#e8eaed' }}
    >
      <Page>
        <RowBetweem
          style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 }}
        >
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="eg. facebook/react-native"
            value={RepoName}
            onChange={e => setRepoName(e.nativeEvent.text)}
          />
          <Button onPress={() => null}>Add repo</Button>
        </RowBetweem>
      </Page>
    </ScrollView>
  );
};

export default RepoList;
