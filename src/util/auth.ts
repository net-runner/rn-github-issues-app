import { useState } from 'react';
import { Alert } from 'react-native';

type ErrorType = {
  email?: string;
  password?: string;
};

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ErrorType>({});

  const submit = () => {
    const nextErrors: ErrorType = {};
    if (email.length === 0) {
      nextErrors.email = 'This field is required.';
    }
    if (password.length === 0) {
      nextErrors.password = 'This field is required.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return null;
    }

    Alert.alert('Success!', `Email: ${email} \n Password: ${password}`);
    return null;
  };

  return {
    submit,
    errors,
    email,
    setEmail,
    password,
    setPassword,
  };
};
