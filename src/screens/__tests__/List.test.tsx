import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { I18nextProvider } from 'react-i18next';
import { List } from '../List';
import i18n from '../../constants/translations';

it('renders tappable items', () => {
  const navigate = jest.fn();

  const out = render(
    <I18nextProvider i18n={i18n}>
      <List navigation={{ navigate }} />
    </I18nextProvider>,
  );

  fireEvent.press(out.getByText('Text'));
  expect(navigate).toBeCalledWith('TextDemo');

  fireEvent.press(out.getByText('Form'));
  expect(navigate).toBeCalledWith('FormDemo');

  fireEvent.press(out.getByText('Button'));
  expect(navigate).toBeCalledWith('ButtonDemo');

  fireEvent.press(out.getByText('Language'));
  expect(navigate).toBeCalledWith('LangDemo');
});
