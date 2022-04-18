import { Alert } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button/Button';
import { Page } from '../components/Page';

export const ButtonDemo = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Button onPress={() => Alert.alert('you pressed the default button')}>
        {t('button.default')}
      </Button>
      <Button
        type="outline"
        onPress={() => Alert.alert('you pressed the outline button')}
      >
        {t('button.outline')}
      </Button>
    </Page>
  );
};
