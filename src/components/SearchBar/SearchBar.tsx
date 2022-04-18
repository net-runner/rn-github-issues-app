import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { CenteringRow } from '../Rows';

interface SearchBarInterface extends TextInputProps {
  value: string;
  setValue: (val: string) => void;
}

const SearchBar = ({ value, setValue, ...rest }: SearchBarInterface) => {
  return (
    <CenteringRow
      style={{
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        height: 45,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 20,
      }}
    >
      <Feather name="search" size={24} color={'gray'} />
      <TextInput
        value={value}
        style={{ color: 'gray', marginLeft: 10, flex: 1 }}
        onChange={e => setValue(e.nativeEvent.text)}
        {...rest}
      />
      {value !== '' && (
        <TouchableWithoutFeedback onPress={() => setValue('')}>
          <Feather name="x" size={24} color={'gray'} />
        </TouchableWithoutFeedback>
      )}
    </CenteringRow>
  );
};

export default SearchBar;
