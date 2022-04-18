import React from 'react';

import { Button } from '../components/Button/Button';
import { TextInput } from '../components/Form';
import { useLogin } from '../util/auth';
import { Page } from '../components/Page';

export const FormDemo = () => {
  const { submit, errors, email, setEmail, password, setPassword } = useLogin();

  return (
    <Page>
      <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        errorText={errors.password}
        autoCapitalize="none"
      />
      <Button onPress={submit}>Sign In</Button>
    </Page>
  );
};
